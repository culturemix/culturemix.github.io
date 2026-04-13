#!/usr/bin/env python3
"""Pick ~10 samples per World-in-a-Frame category (shuffled + food-diverse); copy images and inline into static/js/index.js."""
import argparse
import csv
import json
import os
import random
import re
import shutil

BASE = "/mnt/nas3/mix_culture/datasets/final"
SITE = "/mnt/nas3/mix_culture/culturemix.github.io"
OUT_DIR = os.path.join(SITE, "static/images/gallery/wif/auto")
OUT_JS = os.path.join(SITE, "static/js/wif-gallery-data.js")
INDEX_JS = os.path.join(SITE, "static/js/index.js")
PROMPT = "What is the name of the primary traditional dish shown in the image?"
N = 10


def full_path(rel: str) -> str:
    return os.path.join(BASE, *rel.split("/"))


def title_case_country(s: str) -> str:
    s = (s or "").strip()
    if not s:
        return s
    return s[0].upper() + s[1:] if len(s) == 1 else s.title()


def merge_examples_into_index_js(examples: list[dict]) -> None:
    with open(INDEX_JS, encoding="utf-8") as f:
        js = f.read()
    new_block = "const worldInFrameExamples = " + json.dumps(examples, indent=2, ensure_ascii=False) + ";\n"
    patterns = [
        r"const worldInFrameExamples =\s*\[[\s\S]*?\];\s*(?=const galleryDatasets)",
        r"const worldInFrameExamples =\s*typeof __WIF_GALLERY_EXAMPLES__[\s\S]*?: \[\];\s*(?=const galleryDatasets)",
    ]
    js2, n = js, 0
    for pat in patterns:
        js2, n = re.subn(pat, new_block, js2, count=1)
        if n == 1:
            break
        js2 = js
    if n != 1:
        raise SystemExit(f"merge into index.js failed (expected 1 match, got {n})")
    with open(INDEX_JS, "w", encoding="utf-8") as f:
        f.write(js2)


def copy_if_needed(src: str, dest: str) -> None:
    try:
        if os.path.isfile(dest) and os.path.getsize(dest) == os.path.getsize(src):
            return
    except OSError:
        pass
    shutil.copyfile(src, dest)


def append_fb_entry(
    out: list[dict],
    row: dict,
    fp: str,
    src_tag: str,
    seen_sig: set[tuple[str, str, str]],
) -> bool:
    bg = row["background_country"].strip().lower()
    fd = row["food1_id"].strip()
    sig = (fd, bg, src_tag)
    if sig in seen_sig:
        return False
    seen_sig.add(sig)
    idx = len(out) + 1
    ext = os.path.splitext(fp)[1]
    dest_name = f"fb-{idx:02d}{ext}"
    dest = os.path.join(OUT_DIR, dest_name)
    copy_if_needed(fp, dest)
    dest_rel = f"static/images/gallery/wif/auto/{dest_name}"
    fc = title_case_country(row["food1_country"])
    bc = title_case_country(row["background_country"])
    dish = row["food1_name"].strip()
    out.append(
        {
            "title": f"{dish} × {bc} ({src_tag.replace('_', ' ')})",
            "filter": "Food+Background",
            "cultureCue": {"food": fc, "background": bc},
            "prompt": PROMPT,
            "imageRef": dest_rel,
            "groundTruth": f"{dish} ({fc})",
            "tags": [src_tag, f"{fd} × {bg}"],
        }
    )
    return True


def collect_food(rows: list[dict], rng: random.Random) -> list[dict]:
    candidates: list[tuple[dict, str]] = []
    for row in rows:
        rel = row["image_path"].strip()
        if "white" not in rel.lower():
            continue
        fp = full_path(rel)
        if os.path.isfile(fp):
            candidates.append((row, fp))
    rng.shuffle(candidates)

    out: list[dict] = []
    seen_ids: set[str] = set()
    idx = 0
    for row, fp in candidates:
        if len(out) >= N:
            break
        key = row["food1_id"]
        if key in seen_ids:
            continue
        seen_ids.add(key)
        idx += 1
        ext = os.path.splitext(fp)[1]
        dest_name = f"f-{idx:02d}{ext}"
        dest = os.path.join(OUT_DIR, dest_name)
        copy_if_needed(fp, dest)
        dest_rel = f"static/images/gallery/wif/auto/{dest_name}"
        c1 = title_case_country(row["food1_country"])
        dish = row["food1_name"].strip()
        out.append(
            {
                "title": f"{dish} (isolated)",
                "filter": "Food",
                "cultureCue": {"food": c1, "background": "— (white / no scene)"},
                "prompt": PROMPT,
                "imageRef": dest_rel,
                "groundTruth": f"{dish} ({c1})",
                "tags": ["SF", str(row["food1_id"])],
            }
        )
    return out


def collect_fb(rng: random.Random) -> list[dict]:
    pool: list[tuple[dict, str, str]] = []
    for name, tag in (("sfb_street.csv", "SFB_street"), ("sfb_landmark.csv", "SFB_landmark")):
        with open(os.path.join(BASE, "metadata", name), newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
                rel = row["image_path"].strip()
                fp = full_path(rel)
                if os.path.isfile(fp):
                    pool.append((row, fp, tag))
    rng.shuffle(pool)

    out: list[dict] = []
    seen_sig: set[tuple[str, str, str]] = set()
    used_food: set[str] = set()

    for row, fp, tag in pool:
        if len(out) >= N:
            break
        fid = row["food1_id"].strip()
        if fid in used_food:
            continue
        if append_fb_entry(out, row, fp, tag, seen_sig):
            used_food.add(fid)

    for row, fp, tag in pool:
        if len(out) >= N:
            break
        append_fb_entry(out, row, fp, tag, seen_sig)

    return out


def collect_mf(rows: list[dict], rng: random.Random) -> list[dict]:
    candidates: list[tuple[dict, str]] = []
    for row in rows:
        rel = row["image_path"].strip()
        fp = full_path(rel)
        if os.path.isfile(fp):
            candidates.append((row, fp))
    rng.shuffle(candidates)

    out: list[dict] = []
    seen_pairs: set[tuple[str, str]] = set()
    used_primary: set[str] = set()
    idx = 0

    for row, fp in candidates:
        if len(out) >= N:
            break
        sig = (row["food1_id"], row["food2_id"])
        if sig in seen_pairs:
            continue
        fid = row["food1_id"].strip()
        if fid in used_primary:
            continue
        seen_pairs.add(sig)
        used_primary.add(fid)
        idx += 1
        ext = os.path.splitext(fp)[1]
        dest_name = f"ff-{idx:02d}{ext}"
        dest = os.path.join(OUT_DIR, dest_name)
        copy_if_needed(fp, dest)
        dest_rel = f"static/images/gallery/wif/auto/{dest_name}"
        c1 = title_case_country(row["food1_country"])
        c2 = title_case_country(row["food2_country"])
        d1 = row["food1_name"].strip()
        d2 = row["food2_name"].strip()
        out.append(
            {
                "title": f"{d1} + {d2}",
                "filter": "Food+Food",
                "cultureCue": {"food": f"{c1}, {c2}", "background": "— (white / no scene)"},
                "prompt": PROMPT,
                "imageRef": dest_rel,
                "groundTruth": f"Primary: {d1} ({c1}); secondary: {d2} ({c2})",
                "tags": ["MF", f"{row['food1_id']}+{row['food2_id']}"],
            }
        )

    for row, fp in candidates:
        if len(out) >= N:
            break
        sig = (row["food1_id"], row["food2_id"])
        if sig in seen_pairs:
            continue
        seen_pairs.add(sig)
        idx = len(out) + 1
        ext = os.path.splitext(fp)[1]
        dest_name = f"ff-{idx:02d}{ext}"
        dest = os.path.join(OUT_DIR, dest_name)
        copy_if_needed(fp, dest)
        dest_rel = f"static/images/gallery/wif/auto/{dest_name}"
        c1 = title_case_country(row["food1_country"])
        c2 = title_case_country(row["food2_country"])
        d1 = row["food1_name"].strip()
        d2 = row["food2_name"].strip()
        out.append(
            {
                "title": f"{d1} + {d2}",
                "filter": "Food+Food",
                "cultureCue": {"food": f"{c1}, {c2}", "background": "— (white / no scene)"},
                "prompt": PROMPT,
                "imageRef": dest_rel,
                "groundTruth": f"Primary: {d1} ({c1}); secondary: {d2} ({c2})",
                "tags": ["MF", f"{row['food1_id']}+{row['food2_id']}"],
            }
        )

    return out


def collect_mfb(rows: list[dict], rng: random.Random) -> list[dict]:
    candidates: list[tuple[dict, str]] = []
    for row in rows:
        rel = row["image_path"].strip()
        fp = full_path(rel)
        if os.path.isfile(fp):
            candidates.append((row, fp))
    rng.shuffle(candidates)

    out: list[dict] = []
    seen_trip: set[tuple[str, str, str]] = set()
    used_primary: set[str] = set()
    idx = 0

    for row, fp in candidates:
        if len(out) >= N:
            break
        bg = row["background_country"].strip().lower()
        sig = (row["food1_id"], row["food2_id"], bg)
        if sig in seen_trip:
            continue
        fid = row["food1_id"].strip()
        if fid in used_primary:
            continue
        seen_trip.add(sig)
        used_primary.add(fid)
        idx += 1
        ext = os.path.splitext(fp)[1]
        dest_name = f"ffb-{idx:02d}{ext}"
        dest = os.path.join(OUT_DIR, dest_name)
        copy_if_needed(fp, dest)
        dest_rel = f"static/images/gallery/wif/auto/{dest_name}"
        c1 = title_case_country(row["food1_country"])
        c2 = title_case_country(row["food2_country"])
        bc = title_case_country(row["background_country"])
        d1 = row["food1_name"].strip()
        d2 = row["food2_name"].strip()
        out.append(
            {
                "title": f"{d1} + {d2} × {bc}",
                "filter": "Food+Food+Background",
                "cultureCue": {"food": f"{c1}, {c2}", "background": bc},
                "prompt": PROMPT,
                "imageRef": dest_rel,
                "groundTruth": f"Primary: {d1} ({c1}); secondary: {d2} ({c2})",
                "tags": ["MFB_street", f"{row['food1_id']}+{row['food2_id']} × {bg}"],
            }
        )

    for row, fp in candidates:
        if len(out) >= N:
            break
        bg = row["background_country"].strip().lower()
        sig = (row["food1_id"], row["food2_id"], bg)
        if sig in seen_trip:
            continue
        seen_trip.add(sig)
        idx = len(out) + 1
        ext = os.path.splitext(fp)[1]
        dest_name = f"ffb-{idx:02d}{ext}"
        dest = os.path.join(OUT_DIR, dest_name)
        copy_if_needed(fp, dest)
        dest_rel = f"static/images/gallery/wif/auto/{dest_name}"
        c1 = title_case_country(row["food1_country"])
        c2 = title_case_country(row["food2_country"])
        bc = title_case_country(row["background_country"])
        d1 = row["food1_name"].strip()
        d2 = row["food2_name"].strip()
        out.append(
            {
                "title": f"{d1} + {d2} × {bc}",
                "filter": "Food+Food+Background",
                "cultureCue": {"food": f"{c1}, {c2}", "background": bc},
                "prompt": PROMPT,
                "imageRef": dest_rel,
                "groundTruth": f"Primary: {d1} ({c1}); secondary: {d2} ({c2})",
                "tags": ["MFB_street", f"{row['food1_id']}+{row['food2_id']} × {bg}"],
            }
        )

    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--seed",
        type=int,
        default=None,
        help="RNG seed (default: random each run). Example: --seed 42",
    )
    args = ap.parse_args()
    rng = random.Random(args.seed) if args.seed is not None else random.Random()
    if args.seed is not None:
        print("Using seed", args.seed)
    else:
        print("Using random seed (set --seed for reproducible gallery)")

    os.makedirs(OUT_DIR, exist_ok=True)

    with open(os.path.join(BASE, "metadata/sf.csv"), newline="", encoding="utf-8") as f:
        sf_rows = list(csv.DictReader(f))
    with open(os.path.join(BASE, "metadata/mf.csv"), newline="", encoding="utf-8") as f:
        mf_rows = list(csv.DictReader(f))
    with open(os.path.join(BASE, "metadata/mfb_street.csv"), newline="", encoding="utf-8") as f:
        mfb_rows = list(csv.DictReader(f))

    food = collect_food(sf_rows, rng)
    fb = collect_fb(rng)
    ff = collect_mf(mf_rows, rng)
    ffb = collect_mfb(mfb_rows, rng)

    examples = food + fb + ff + ffb
    counts = {
        "Food": len(food),
        "Food+Background": len(fb),
        "Food+Food": len(ff),
        "Food+Food+Background": len(ffb),
    }
    if any(v < N for v in counts.values()):
        raise SystemExit(f"Not enough samples: {counts} (need {N} each)")

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("/* Auto-generated by scripts/build_wif_gallery.py (mirror; site uses index.js) */\n")
        f.write("var __WIF_GALLERY_EXAMPLES__ = ")
        f.write(json.dumps(examples, indent=2, ensure_ascii=False))
        f.write(";\n")

    merge_examples_into_index_js(examples)

    print("Wrote", OUT_JS, "and merged into index.js")
    print("Counts:", counts)


if __name__ == "__main__":
    main()
