#!/usr/bin/env python3
"""Build lineage groups: one seed single-food -> MF / MFB variants."""
import csv
import json
import os
import random
import shutil

BASE = "/mnt/nas3/mix_culture/datasets/final"
SITE = "/mnt/nas3/mix_culture/culturemix.github.io"
OUT_DIR = os.path.join(SITE, "static/images/gallery/wif/lineage")
OUT_JS = os.path.join(SITE, "static/js/wif-lineage-data.js")
GROUP_COUNT = 8
MF_PER_GROUP = 3
SFB_PER_GROUP = 3
MFB_PER_GROUP = 3


def full_path(rel: str) -> str:
    return os.path.join(BASE, *rel.split("/"))


def title_case_country(s: str) -> str:
    s = (s or "").strip()
    if not s:
        return s
    return s.title()


def copy_if_needed(src: str, dest: str) -> None:
    try:
        if os.path.isfile(dest) and os.path.getsize(dest) == os.path.getsize(src):
            return
    except OSError:
        pass
    shutil.copyfile(src, dest)


def main() -> None:
    rng = random.Random(11)
    os.makedirs(OUT_DIR, exist_ok=True)

    with open(os.path.join(BASE, "metadata/sf.csv"), newline="", encoding="utf-8") as f:
        sf_rows = list(csv.DictReader(f))
    with open(os.path.join(BASE, "metadata/mf.csv"), newline="", encoding="utf-8") as f:
        mf_rows = list(csv.DictReader(f))
    with open(os.path.join(BASE, "metadata/sfb_street.csv"), newline="", encoding="utf-8") as f:
        sfb_rows = list(csv.DictReader(f))
    with open(os.path.join(BASE, "metadata/mfb_street.csv"), newline="", encoding="utf-8") as f:
        mfb_rows = list(csv.DictReader(f))

    sf_by_id: dict[str, dict] = {}
    for row in sf_rows:
        rel = row["image_path"].strip()
        if "white" not in rel.lower():
            continue
        fp = full_path(rel)
        if not os.path.isfile(fp):
            continue
        fid = row["food1_id"].strip()
        if fid not in sf_by_id:
            sf_by_id[fid] = row

    mf_by_seed: dict[str, list[dict]] = {}
    for row in mf_rows:
        fp = full_path(row["image_path"].strip())
        if not os.path.isfile(fp):
            continue
        fid = row["food1_id"].strip()
        mf_by_seed.setdefault(fid, []).append(row)

    sfb_by_seed: dict[str, list[dict]] = {}
    for row in sfb_rows:
        fp = full_path(row["image_path"].strip())
        if not os.path.isfile(fp):
            continue
        fid = row["food1_id"].strip()
        sfb_by_seed.setdefault(fid, []).append(row)

    mfb_by_seed: dict[str, list[dict]] = {}
    for row in mfb_rows:
        fp = full_path(row["image_path"].strip())
        if not os.path.isfile(fp):
            continue
        fid = row["food1_id"].strip()
        mfb_by_seed.setdefault(fid, []).append(row)

    eligible = [
        fid
        for fid in sf_by_id
        if len(mf_by_seed.get(fid, [])) >= MF_PER_GROUP
        and len(sfb_by_seed.get(fid, [])) >= SFB_PER_GROUP
        and len(mfb_by_seed.get(fid, [])) >= MFB_PER_GROUP
    ]
    rng.shuffle(eligible)
    picked = eligible[:GROUP_COUNT]

    groups = []
    for idx, fid in enumerate(picked, start=1):
        sf = sf_by_id[fid]
        sf_src = full_path(sf["image_path"].strip())
        sf_ext = os.path.splitext(sf_src)[1]
        sf_name = f"seed-{idx:02d}-sf{sf_ext}"
        sf_dst = os.path.join(OUT_DIR, sf_name)
        copy_if_needed(sf_src, sf_dst)

        mf_candidates = mf_by_seed[fid][:]
        rng.shuffle(mf_candidates)
        sfb_candidates = sfb_by_seed[fid][:]
        rng.shuffle(sfb_candidates)
        mfb_candidates = mfb_by_seed[fid][:]
        rng.shuffle(mfb_candidates)

        mf_samples = []
        for j, row in enumerate(mf_candidates[:MF_PER_GROUP], start=1):
            src = full_path(row["image_path"].strip())
            ext = os.path.splitext(src)[1]
            fn = f"seed-{idx:02d}-mf-{j:02d}{ext}"
            dst = os.path.join(OUT_DIR, fn)
            copy_if_needed(src, dst)
            mf_samples.append(
                {
                    "imageRef": f"static/images/gallery/wif/lineage/{fn}",
                    "foodPair": f"{row['food1_name']} + {row['food2_name']}",
                    "countries": f"{title_case_country(row['food1_country'])}, {title_case_country(row['food2_country'])}",
                    "addedFoodCountry": title_case_country(row["food2_country"]),
                }
            )

        mfb_samples = []
        for j, row in enumerate(mfb_candidates[:MFB_PER_GROUP], start=1):
            src = full_path(row["image_path"].strip())
            ext = os.path.splitext(src)[1]
            fn = f"seed-{idx:02d}-mfb-{j:02d}{ext}"
            dst = os.path.join(OUT_DIR, fn)
            copy_if_needed(src, dst)
            mfb_samples.append(
                {
                    "imageRef": f"static/images/gallery/wif/lineage/{fn}",
                    "foodPair": f"{row['food1_name']} + {row['food2_name']}",
                    "addedFoodCountry": title_case_country(row["food2_country"]),
                    "background": title_case_country(row["background_country"]),
                }
            )

        sfb_samples = []
        for j, row in enumerate(sfb_candidates[:SFB_PER_GROUP], start=1):
            src = full_path(row["image_path"].strip())
            ext = os.path.splitext(src)[1]
            fn = f"seed-{idx:02d}-sfb-{j:02d}{ext}"
            dst = os.path.join(OUT_DIR, fn)
            copy_if_needed(src, dst)
            sfb_samples.append(
                {
                    "imageRef": f"static/images/gallery/wif/lineage/{fn}",
                    "background": title_case_country(row["background_country"]),
                }
            )

        groups.append(
            {
                "seedFoodId": fid,
                "seedFoodName": sf["food1_name"],
                "seedFoodCountry": title_case_country(sf["food1_country"]),
                "singleImageRef": f"static/images/gallery/wif/lineage/{sf_name}",
                "mfSamples": mf_samples,
                "sfbSamples": sfb_samples,
                "mfbSamples": mfb_samples,
            }
        )

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("/* Auto-generated by scripts/build_wif_lineage.py */\n")
        f.write("var __WIF_SEED_LINEAGE__ = ")
        f.write(json.dumps(groups, indent=2, ensure_ascii=False))
        f.write(";\n")

    print("Wrote", OUT_JS, "groups:", len(groups))


if __name__ == "__main__":
    main()

