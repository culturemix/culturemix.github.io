const papers = [
  {
    index: "[1]",
    paperClass: "wif",
    fullTitle: "World in a Frame: Understanding Culture Mixing as a New Challenge for Vision-Language Models",
    venue: "CVPR 2026",
    venueClass: "cvpr",
    target: "Food",
    perturbation: "Food, Background",
    description:
      "Introduces CultureMix, a food-centric benchmark for studying how LVLMs behave when cultural food cues are mixed with conflicting context.",
    bullets: [
      "Builds a 23k diffusion-generated, human-verified benchmark for culture mixing in visual question answering.",
      "Covers food-only, food+food, food+background, and food+food+background settings.",
      "Shows notable drops once cultural backgrounds are introduced into otherwise recognizable food scenes.",
      "Studies model consistency and robustness strategies for reducing background sensitivity."
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2511.22787" },
      { label: "Dataset", href: "https://huggingface.co/datasets/EunsuKim/CultureMix" }
    ]
  },
  {
    index: "[2]",
    paperClass: "ct",
    fullTitle: "Vision Language Models are Confused Tourists",
    venue: "CVPR 2026",
    venueClass: "cvpr",
    target: "Food, Attire, Instrument",
    perturbation: "Landmark, Flag",
    description:
      "Builds a cultural adversarial robustness suite that reveals how VLMs misread cuisine, attire, and instruments under mixed geographic context.",
    bullets: [
      "Introduces 5,451 samples spanning cuisine, attire, and musical instruments.",
      "Measures failures under culturally mixed settings created through context-aware perturbations.",
      "Compares robustness across multiple visual construction styles.",
      "Shows that cue conflict reliably destabilizes cultural recognition."
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2511.17004" },
      { label: "Dataset", href: "https://huggingface.co/datasets/patrickamadeus/vlms-are-confused-tourists" }
    ]
  },
  {
    index: "[3]",
    paperClass: "ttk",
    fullTitle: "When Tom Eats Kimchi: Evaluating Cultural Bias of Multimodal Large Language Models in Cultural Mixture Contexts",
    venue: "C3NLP Workshop",
    venueClass: "cl",
    target: "Food, Attire, Festival",
    perturbation: "Ethnicity",
    description:
      "Introduces MixCuBe, a cross-cultural bias benchmark focused on how the depicted person shifts MLLM recognition of food and related cultural markers.",
    bullets: [
      "Uses 2,475 images across five countries, four ethnicities, and three cultural marker types.",
      "Finds strong over-reliance on person appearance when recognizing food items.",
      "Reports higher robustness for high-resource cultures than for low-resource ones.",
      "Shows up to a 58% original-versus-perturbed gap for low-resource cultures on GPT-4o."
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2503.16826" },
      { label: "Dataset", href: "https://huggingface.co/datasets/kyawyethu/MixCuBe" }
    ]
  }
];

const heroExamples = [
  {
    title: "Food + background conflict",
    tag: "World in a Frame",
    text: "The same dish can change model prediction when it moves from a neutral table to a culturally loaded background.",
    image: "static/images/carousel1.jpg"
  },
  {
    title: "Cuisine under mixed travel cues",
    tag: "Confused Tourist",
    text: "Cuisine recognition weakens when the scene introduces a conflicting sense of place.",
    image: "static/images/gallery/vlm_tourist/soto_japan.jpeg"
  },
  {
    title: "Food + person perturbation",
    tag: "MixCuBe",
    text: "Person appearance can override the food identity, even when the dish itself remains unchanged.",
    image: "static/images/carousel3.jpg"
  },
  {
    title: "Layered culture mixing",
    tag: "CultureMix Hub",
    text: "Across the three papers, cue conflict consistently exposes shortcut-based behavior in multimodal models.",
    image: "static/images/carousel4.jpg"
  }
];

const seedLineageGroups =
  typeof __WIF_SEED_LINEAGE__ !== "undefined" && Array.isArray(__WIF_SEED_LINEAGE__) ? __WIF_SEED_LINEAGE__ : [];

const mixcubeGroups =
  typeof __MIXCUBE_GROUPS__ !== "undefined" && Array.isArray(__MIXCUBE_GROUPS__) ? __MIXCUBE_GROUPS__ : [];

const galleryDatasets = [
  {
    id: "world-in-a-frame",
    label: "World in a Frame",
    filters: ["All", "Food", "Food+Background", "Food+Food", "Food+Food+Background"],
    layout: "lineage",
    examples: seedLineageGroups
  },
  {
    id: "confused-tourist",
    label: "Confused Tourist",
    filters: ["All", "Cuisine", "Attire", "Instruments"],
    examples: [
      {
        title: "Qorma with Buenos Aires landmark cues",
        filter: "Cuisine",
        prompt:
          "A bowl of Afghan qorma is framed as the main subject while the travel-photo setting around it points to Argentina, with Buenos Aires cues pulling the model away from Afghanistan.",
        imageRef: "static/images/gallery/vlm_tourist/qorma_argentina.jpeg",
        groundTruthCountry: "Afghanistan",
        predictedCountry: "Argentina",
        groundTruthItem: "Qorma",
        predictedItem: "Sorrentinos",
        tags: ["cuisine", "flag_landmark"]
      },
      {
        title: "Asado with Great Wall travel cues",
        filter: "Cuisine",
        prompt:
          "Argentine asado remains visually central, but the surrounding composition introduces Chinese destination cues through the Great Wall setting and flag placement.",
        imageRef: "static/images/gallery/vlm_tourist/asado_china.jpeg",
        groundTruthCountry: "Argentina",
        predictedCountry: "China",
        groundTruthItem: "Asado",
        predictedItem: "糖醋排骨 (Tangcu Paigu)",
        tags: ["cuisine", "flag_landmark"]
      },
      {
        title: "Feijoada with Philippine rice-terrace cues",
        filter: "Cuisine",
        prompt:
          "A plate of Brazilian feijoada is kept in sharp focus while Banaue Rice Terraces and Philippine travel cues reshape the scene's cultural signal.",
        imageRef: "static/images/gallery/vlm_tourist/feijoada_philippines.jpeg",
        groundTruthCountry: "Brazil",
        predictedCountry: "Philippines",
        groundTruthItem: "Feijoada",
        predictedItem: "Adobo (Adobong Manok)",
        tags: ["cuisine", "flag_landmark"]
      },
      {
        title: "Goulash with New Zealand skyline cues",
        filter: "Cuisine",
        prompt:
          "Czech goulash sits in the foreground, but the travel-image framing layers in New Zealand symbols and a Sky Tower backdrop that redirect the model elsewhere.",
        imageRef: "static/images/gallery/vlm_tourist/goulash_new_zealand.jpeg",
        groundTruthCountry: "Czechia",
        predictedCountry: "New Zealand",
        groundTruthItem: "Goulash",
        predictedItem: "Hokey pokey (honeycomb toffee)",
        tags: ["cuisine", "flag_landmark"]
      },
      {
        title: "Soto ayam with Tokyo Tower cues",
        filter: "Cuisine",
        prompt:
          "An Indonesian bowl of soto ayam anchors the composition, yet the room styling and Tokyo Tower skyline push the model toward a Japanese reading.",
        imageRef: "static/images/gallery/vlm_tourist/soto_ayam_japan.jpeg",
        groundTruthCountry: "Indonesia",
        predictedCountry: "Japan",
        groundTruthItem: "Soto Ayam",
        predictedItem: "Ramen",
        tags: ["cuisine", "flag_landmark"]
      },
      {
        title: "Kroj with Buenos Aires street cues",
        filter: "Attire",
        prompt:
          "A traditional Czech kroj outfit is isolated in the foreground while the plaza scene and Obelisco de Buenos Aires cues suggest Argentina instead.",
        imageRef: "static/images/gallery/vlm_tourist/kroj_argentina.jpeg",
        groundTruthCountry: "Czechia",
        predictedCountry: "Argentina",
        groundTruthItem: "Kroj",
        predictedItem: "Traje de gaucho",
        tags: ["attire", "flag_landmark"]
      },
      {
        title: "Isiagu with DR Congo landmark cues",
        filter: "Attire",
        prompt:
          "A Nigerian isiagu top is photographed as the main subject, but the paired flag and Inga Dam setting pull the composition toward DR Congo.",
        imageRef: "static/images/gallery/vlm_tourist/isiagu_dr_congo.jpeg",
        groundTruthCountry: "Nigeria",
        predictedCountry: "Democratic Republic of the Congo",
        groundTruthItem: "Isiagu",
        predictedItem: "Abacost",
        tags: ["attire", "flag_landmark"]
      },
      {
        title: "Maria Clara gown with South African mountain cues",
        filter: "Attire",
        prompt:
          "The Filipino Maria Clara gown stays centered while Table Mountain and South African travel cues dominate the surrounding visual narrative.",
        imageRef: "static/images/gallery/vlm_tourist/maria_clara_gown_south_africa.jpeg",
        groundTruthCountry: "Philippines",
        predictedCountry: "South Africa",
        groundTruthItem: "Maria Clara Gown",
        predictedItem: "Umbhaco",
        tags: ["attire", "flag_landmark"]
      },
      {
        title: "Liqui liqui with Borobudur travel cues",
        filter: "Attire",
        prompt:
          "A Venezuelan liqui liqui suit is shown front and center, but Borobudur and Indonesian scene cues create a different cultural destination signal.",
        imageRef: "static/images/gallery/vlm_tourist/liqui_liqui_indonesia.jpeg",
        groundTruthCountry: "Venezuela",
        predictedCountry: "Indonesia",
        groundTruthItem: "Liqui Liqui",
        predictedItem: "Jas tutup",
        tags: ["attire", "flag_landmark"]
      },
      {
        title: "Ao tu than with Lalibela church cues",
        filter: "Attire",
        prompt:
          "Vietnamese ao tu than attire remains the focal garment while the landmark background points strongly toward Ethiopia through Lalibela church imagery.",
        imageRef: "static/images/gallery/vlm_tourist/ao_tu_than_ethiopia.jpeg",
        groundTruthCountry: "Vietnam",
        predictedCountry: "Ethiopia",
        groundTruthItem: "Ao Tu Than",
        predictedItem: "Habesha Kemis",
        tags: ["attire", "flag_landmark"]
      },
      {
        title: "Shakuhachi with Brandenburg Gate cues",
        filter: "Instruments",
        prompt:
          "A Japanese shakuhachi is staged as the focal instrument, but German landmark and flag cues steer the scene toward a European interpretation.",
        imageRef: "static/images/gallery/vlm_tourist/shakuhachi_germany.jpeg",
        groundTruthCountry: "Japan",
        predictedCountry: "Germany",
        groundTruthItem: "Shakuhachi",
        predictedItem: "Blockflöte (recorder)",
        tags: ["instrument", "flag_landmark"]
      },
      {
        title: "Vihuela with Caracas cathedral cues",
        filter: "Instruments",
        prompt:
          "The mariachi vihuela remains prominent in the frame while Venezuelan flag cues and Caracas Cathedral reshape the model's geographic guess.",
        imageRef: "static/images/gallery/vlm_tourist/vihuela_venezuela.jpeg",
        groundTruthCountry: "Mexico",
        predictedCountry: "Venezuela",
        groundTruthItem: "Mariachi Guitar (Vihuela)",
        predictedItem: "Cuatro venezolano",
        tags: ["instrument", "flag_landmark"]
      },
      {
        title: "Janggu with Buenos Aires monument cues",
        filter: "Instruments",
        prompt:
          "A Korean janggu drum is photographed against Argentine travel cues, with the Obelisco de Buenos Aires and flag combination overpowering the original context.",
        imageRef: "static/images/gallery/vlm_tourist/janggu_argentina.jpeg",
        groundTruthCountry: "South Korea",
        predictedCountry: "Argentina",
        groundTruthItem: "Janggu",
        predictedItem: "Bombo legüero",
        tags: ["instrument", "flag_landmark"]
      },
      {
        title: "Bombarde with Brandenburg Gate cues",
        filter: "Instruments",
        prompt:
          "A French bombarde is presented with Germany-specific landmark and flag cues, inviting the model to reinterpret the instrument's origin.",
        imageRef: "static/images/gallery/vlm_tourist/bombarde_germany.jpeg",
        groundTruthCountry: "France",
        predictedCountry: "Germany",
        groundTruthItem: "Bombarde",
        predictedItem: "Heckelphone",
        tags: ["instrument", "flag_landmark"]
      },
      {
        title: "Haegeum with Mount Fuji cues",
        filter: "Instruments",
        prompt:
          "A Korean haegeum stays visually dominant, but Mount Fuji and Japanese flag cues create a strong competing signal for the model.",
        imageRef: "static/images/gallery/vlm_tourist/haegeum_japan.jpeg",
        groundTruthCountry: "South Korea",
        predictedCountry: "Japan",
        groundTruthItem: "Haegeum",
        predictedItem: "Shamisen",
        tags: ["instrument", "flag_landmark"]
      }
    ]
  },
  {
    id: "mixcube",
    label: "MixCuBe",
    filters: ["All", "Food", "Clothing", "Festivals"],
    layout: "ethnicity-lineage",
    examples: mixcubeGroups
  }
];

const benchmarkCards = [
  {
    paperClass: "wif",
    title: "World in a Frame",
    venue: "CVPR 2026",
    venueClass: "cvpr",
    paperHref: "https://arxiv.org/abs/2511.22787",
    stats: [
      { value: "23,031", label: "Samples" },
      { value: "Food", label: "Target" },
      { value: "Food + Background", label: "Perturbation" },
      { value: "Background sensitivity", label: "Failure pattern" }
    ]
  },
  {
    paperClass: "ct",
    title: "Confused Tourists",
    venue: "CVPR 2026",
    venueClass: "cvpr",
    paperHref: "https://arxiv.org/abs/2511.17004",
    stats: [
      { value: "5,451", label: "Samples" },
      { value: "Food · Attire · Instruments", label: "Target" },
      { value: "Landmark + Flag", label: "Perturbation" },
      { value: "Geography cue conflict", label: "Failure pattern" }
    ]
  },
  {
    paperClass: "ttk",
    title: "When Tom Eats Kimchi",
    venue: "C3NLP Workshop",
    venueClass: "cl",
    paperHref: "https://arxiv.org/abs/2503.16826",
    stats: [
      { value: "2,475", label: "Samples" },
      { value: "Food · Attire · Festivals", label: "Target" },
      { value: "Ethnicity", label: "Perturbation" },
      { value: "Person-cue overreach", label: "Failure pattern" }
    ]
  }
];

const findings = [
  {
    number: "01",
    title: "Models over-index on co-occurring cues",
    text: "Across all three projects, secondary context often overrides the target cultural item."
  },
  {
    number: "02",
    title: "Mixed-culture scenes expose hidden failures",
    text: "Performance that looks stable in isolated settings breaks once multiple cultural signals co-exist."
  },
  {
    number: "03",
    title: "Robustness is uneven across cultures",
    text: "Lower-resource cultural categories tend to absorb larger accuracy drops and higher prediction instability."
  }
];

const resources = [
  {
    paperClass: "wif",
    title: "World in a Frame",
    description: "",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2511.22787" }],
    codeLinks: [],
    citation: `@article{kim2025worldinframe,
  title={World in a Frame: Understanding Culture Mixing as a New Challenge for Vision-Language Models},
  author={Kim, Eunsu and Park, Junyeong and others},
  journal={arXiv preprint arXiv:2511.22787},
  year={2025}
}`
  },
  {
    paperClass: "ct",
    title: "Confused Tourist",
    description: "",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2511.17004" }],
    codeLinks: [],
    citation: `@article{irawan2025confusedtourist,
  title={Vision Language Models are Confused Tourists},
  author={Irawan, Patrick and collaborators},
  journal={arXiv preprint arXiv:2511.17004},
  year={2025}
}`
  },
  {
    paperClass: "ttk",
    title: "MixCuBe",
    description: "",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2503.16826" }],
    codeLinks: [{ label: "Dataset", href: "https://huggingface.co/datasets/kyawyethu/MixCuBe" }],
    citation: `@article{kim2025tomkimchi,
  title={When Tom Eats Kimchi: Evaluating Cultural Bias of Multimodal Large Language Models in Cultural Mixture Contexts},
  author={Kim, Jun Seong and Thu, Kyaw Ye and others},
  journal={arXiv preprint arXiv:2503.16826},
  year={2025}
}`
  }
];

const mainContributors = [
  {
    name: "Eunsu Kim",
    affiliation: "KAIST",
    profile: "https://eunsu-k1m.github.io/",
    photo: "static/images/contributors/eunsu.jpeg"
  },
  {
    name: "Ikhlasul Hanif",
    affiliation: "MBZUAI",
    profile: null,
    photo: "static/images/contributors/hanif.jpeg"
  },
  {
    name: "Jun Seong Kim",
    affiliation: "KAIST",
    profile: null,
    photo: "static/images/contributors/junseongkim.jpeg"
  },
  {
    name: "Junyeong Park",
    affiliation: "KAIST",
    profile: null,
    photo: "static/images/contributors/junyeong.jpeg"
  },
  {
    name: "Muhammad Dehan",
    affiliation: "MBZUAI",
    profile: null,
    photo: "static/images/contributors/dehan.jpeg"
  },
  {
    name: "Patrick Amadeus Irawan",
    affiliation: "MBZUAI",
    profile: null,
    photo: "static/images/contributors/patrick.jpeg"
  }
];

const otherContributors = [];

const state = {
  datasetId: galleryDatasets[0].id,
  filter: "All",
  heroOffset: 0
};

let heroTimer = null;

function renderTopicPills(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => `<span class="topic-pill">${item}</span>`)
    .join("");
}

function renderHeroExamples() {
  const track = document.getElementById("hero-carousel-track");
  if (!track) return;

  const rotated = heroExamples.map((_, index) => heroExamples[(index + state.heroOffset) % heroExamples.length]).slice(0, 3);
  track.innerHTML = rotated
    .map(
      (item) => `
        <article class="hero-example" style="background-image: url('${item.image}')">
          <div class="hero-example-content">
            <span class="hero-tag">${item.tag}</span>
            <h3>${item.title}</h3>
          </div>
          <div class="hero-example-overlay">
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function startHeroRotation() {
  const track = document.getElementById("hero-carousel-track");
  if (!track) return;
  if (heroTimer) {
    window.clearInterval(heroTimer);
  }
  heroTimer = window.setInterval(() => {
    if (track) {
      track.classList.add("is-transitioning");
    }
    window.setTimeout(() => {
      state.heroOffset = (state.heroOffset + 1) % heroExamples.length;
      renderHeroExamples();
      if (track) {
        track.classList.remove("is-transitioning");
      }
    }, 220);
  }, 3200);
}

function renderPapers() {
  const container = document.getElementById("paper-list");
  if (!container) return;
  container.innerHTML = papers
    .map(
      (paper) => `
        <article class="paper-card paper-${paper.paperClass || "wif"} reveal-card">
          <span class="venue-badge venue-badge-floating ${paper.venueClass}">${paper.venue}</span>
          <div class="paper-main">
            <div class="paper-title-row">
              <h3><span class="paper-title-highlight">${paper.fullTitle}</span></h3>
            </div>
            <div class="topic-stack" aria-label="Target and perturbation topics">
              <div class="topic-row">
                <span class="topic-label">Target</span>
                ${renderTopicPills(paper.target)}
              </div>
              <div class="topic-row">
                <span class="topic-label">Perturbation</span>
                ${renderTopicPills(paper.perturbation)}
              </div>
            </div>
            <div class="paper-meta">
              <p>${paper.description}</p>
              <ul class="paper-bullets">
                ${paper.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="paper-side">
            <div class="paper-links">
              ${paper.links
                .map((link) => `<a class="paper-link-${link.label.toLowerCase()}" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDatasetTabs() {
  const tabs = document.getElementById("dataset-tabs");
  if (!tabs) return;
  tabs.innerHTML = galleryDatasets
    .map(
      (dataset) => `
        <button class="dataset-tab ${dataset.id === state.datasetId ? "is-active" : ""}" type="button" data-dataset-id="${dataset.id}">
          ${dataset.label}
        </button>
      `
    )
    .join("");
}

function renderFilters() {
  const row = document.getElementById("filter-row");
  const dataset = galleryDatasets.find((item) => item.id === state.datasetId);
  if (!row || !dataset) return;
  if (!dataset.filters.includes(state.filter)) {
    state.filter = "All";
  }
  row.innerHTML = dataset.filters
    .map(
      (filter) => `
        <button class="filter-chip ${filter === state.filter ? "is-active" : ""}" type="button" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const dataset = galleryDatasets.find((item) => item.id === state.datasetId);
  if (!grid || !dataset) return;

  if (dataset.layout === "lineage") {
    const showFood = state.filter === "All" || state.filter === "Food";
    const showFB = state.filter === "All" || state.filter === "Food+Background";
    const showFF = state.filter === "All" || state.filter === "Food+Food";
    const showFFB = state.filter === "All" || state.filter === "Food+Food+Background";
    grid.innerHTML = dataset.examples
      .map(
        (group) => `
          <article class="gallery-card lineage-card">
            <div class="gallery-content lineage-content">
              <h3>Seed Food Name: ${group.seedFoodName}</h3>
              <p class="gallery-culture-lines"><span class="culture-label">Country:</span> ${group.seedFoodCountry}</p>
              ${
                showFood
                  ? `<div class="lineage-block">
                <strong>Single food</strong>
                <button class="lineage-image-single" type="button" data-zoom-src="${escapeAttribute(group.singleImageRef)}" data-zoom-caption="${escapeAttribute(`Single food · Seed: ${group.seedFoodCountry}`)}" style="background-image: url('${group.singleImageRef}')"></button>
              </div>`
                  : ""
              }
              ${
                showFF
                  ? `<div class="lineage-block">
                <strong>Food + Food</strong>
                <div class="lineage-mini-grid">
                  ${group.mfSamples
                    .map(
                      (s) => `
                        <div class="lineage-mini">
                          <button class="lineage-mini-image" type="button" data-zoom-src="${escapeAttribute(s.imageRef)}" data-zoom-caption="${escapeAttribute(`Food+Food · Seed: ${group.seedFoodCountry} · Added: ${s.addedFoodCountry}`)}" style="background-image: url('${s.imageRef}')"></button>
                          <span>Food2: ${s.addedFoodCountry}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>`
                  : ""
              }
              ${
                showFB
                  ? `<div class="lineage-block">
                <strong>Food + Background</strong>
                <div class="lineage-mini-grid compact">
                  ${group.sfbSamples
                    .map(
                      (s) => `
                        <div class="lineage-mini">
                          <button class="lineage-mini-image" type="button" data-zoom-src="${escapeAttribute(s.imageRef)}" data-zoom-caption="${escapeAttribute(`Food+Background · Seed: ${group.seedFoodCountry} · Background: ${s.background}`)}" style="background-image: url('${s.imageRef}')"></button>
                          <span>BG: ${s.background}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>`
                  : ""
              }
              ${
                showFFB
                  ? `<div class="lineage-block">
                <strong>Food + Food + Background</strong>
                <div class="lineage-mini-grid compact">
                  ${group.mfbSamples
                    .map(
                      (s) => `
                        <div class="lineage-mini">
                          <button class="lineage-mini-image" type="button" data-zoom-src="${escapeAttribute(s.imageRef)}" data-zoom-caption="${escapeAttribute(`Food+Food+Background · Seed: ${group.seedFoodCountry} · Added: ${s.addedFoodCountry} · Background: ${s.background}`)}" style="background-image: url('${s.imageRef}')"></button>
                          <span>Food2: ${s.addedFoodCountry}<br>BG: ${s.background}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>`
                  : ""
              }
            </div>
          </article>
        `
      )
      .join("");
    const strip = document.getElementById("gallery-strip-wrap");
    if (strip) strip.scrollLeft = 0;
    return;
  }

  if (dataset.layout === "ethnicity-lineage") {
    const visible = dataset.examples.filter((group) => state.filter === "All" || group.filter === state.filter);
    grid.innerHTML = visible
      .map(
        (group) => `
          <article class="gallery-card mixcube-lineage-card">
            <div class="gallery-content mixcube-lineage-content">
              <div class="gallery-head">
                <h3>${group.title}</h3>
              </div>
              <p class="gallery-culture-lines">
                <span class="culture-label">Country:</span> ${group.country || ""}
                <br><span class="culture-label">Category:</span> ${group.filter || ""}
              </p>
              <div class="mixcube-original-block">
                <strong>${group.original?.label || "Original"}</strong>
                <button
                  class="mixcube-original-image"
                  type="button"
                  data-zoom-src="${escapeAttribute(group.original?.imageRef || "")}"
                  data-zoom-caption="${escapeAttribute(`${group.title} - Original - ${group.country || ""}`)}"
                  style="background-image: url('${group.original?.imageRef || ""}')"
                ></button>
              </div>
              <div class="mixcube-variant-block">
                <strong>Ethnicity-altered variants</strong>
                <div class="mixcube-variant-grid">
                  ${(group.variants || [])
                    .map(
                      (variant) => `
                        <div class="mixcube-variant">
                          <button
                            class="mixcube-variant-image"
                            type="button"
                            data-zoom-src="${escapeAttribute(variant.imageRef || "")}"
                            data-zoom-caption="${escapeAttribute(`${group.title} - ${variant.ethnicity || "Variant"} - ${group.country || ""}`)}"
                            style="background-image: url('${variant.imageRef || ""}')"
                          ></button>
                          <span>${variant.ethnicity || "Variant"}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </article>
        `
      )
      .join("");
    const strip = document.getElementById("gallery-strip-wrap");
    if (strip) strip.scrollLeft = 0;
    return;
  }

  const visible = dataset.examples.filter((example) => state.filter === "All" || example.filter === state.filter);
  if (dataset.id === "confused-tourist") {
    grid.innerHTML = visible.map(renderTouristExampleCard).join("");
    const strip = document.getElementById("gallery-strip-wrap");
    if (strip) strip.scrollLeft = 0;
    return;
  }

  grid.innerHTML = visible
    .map(
      (example) => `
        <article class="gallery-card">
          <div class="gallery-image" style="background-image: linear-gradient(135deg, rgba(100,116,139,0.28), rgba(30,41,59,0.55)), url('${example.imageRef}')">
            <button class="gallery-image-zoom" type="button" data-zoom-src="${escapeAttribute(example.imageRef)}" data-zoom-caption="${escapeAttribute(
              example.cultureCue
                ? `Food: ${example.cultureCue.food} · Background: ${example.cultureCue.background}`
                : example.groundTruth || example.groundTruthItem || example.title
            )}">
              <span class="gallery-image-zoom-label"></span>
            </button>
          </div>
          <div class="gallery-content">
            <div class="gallery-head">
              <h3>${example.title}</h3>
            </div>
            ${
              example.cultureCue
                ? `<p class="gallery-culture-lines"><span class="culture-label">Food:</span> ${example.cultureCue.food}<br><span class="culture-label">Background:</span> ${example.cultureCue.background}</p>`
                : ""
            }
            ${example.description ? `<p class="gallery-description">${example.description}</p>` : ""}
            <p class="gallery-prompt">${example.prompt}</p>
            <div class="ground-truth-row">
              <span class="ground-truth-pill">${example.groundTruth || example.groundTruthItem || ""}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  const strip = document.getElementById("gallery-strip-wrap");
  if (strip) strip.scrollLeft = 0;
}

function renderTouristExampleCard(example) {
  const category = getEvaluationCategory(example);
  const prompt = buildEvaluationPrompt(category);
  const originName = example.groundTruthItem || "Unknown";
  const originCountry = example.groundTruthCountry || "Unknown";
  const distractor = example.predictedCountry || "Mixed geographic cue";
  const caption = `${example.title || example.groundTruthItem || "Confused Tourist example"} · ${example.filter || ""}`;
  return `
    <article class="gallery-card gallery-card-tourist">
      <button
        class="tourist-image-button"
        type="button"
        data-zoom-src="${escapeAttribute(example.imageRef)}"
        data-zoom-caption="${escapeAttribute(caption)}"
        aria-label="Enlarge ${escapeAttribute(example.title || "Confused Tourist example")}"
      >
        <img src="${escapeAttribute(example.imageRef)}" alt="${escapeAttribute(example.title || "Confused Tourist example")}" loading="lazy">
      </button>
      <div class="tourist-card-content">
        <p class="tourist-prompt">${escapeHtml(prompt)}</p>
        <div class="tourist-info-box">
          <span class="tourist-info-row"><span class="tourist-info-label tourist-name-label">Name:</span><span class="tourist-info-value">${escapeHtml(originName)}</span></span>
          <span class="tourist-info-row"><span class="tourist-info-label tourist-origin-label">Origin:</span><span class="tourist-info-value">${escapeHtml(originCountry)}</span></span>
          <span class="tourist-info-row"><span class="tourist-info-label tourist-distractor-label">Distractor:</span><span class="tourist-info-value">${escapeHtml(distractor)}</span></span>
        </div>
        <div class="tourist-card-footer">
          <span class="tourist-category-pill">${escapeHtml(example.filter || "Example")}</span>
          <div class="tourist-copy-buttons">
            <button
              class="tourist-copy-btn tourist-copy-prompt"
              type="button"
              data-copy-prompt="${escapeAttribute(encodeURIComponent(prompt))}"
            >
              <span class="copy-icon" aria-hidden="true"></span>
              <span>Copy Prompt</span>
            </button>
            <button
              class="tourist-copy-btn tourist-copy-image"
              type="button"
              data-copy-image="${escapeAttribute(example.imageRef)}"
            >
              <span class="image-icon" aria-hidden="true"></span>
              <span>Copy Image</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function initGalleryStripDrag() {
  const wrap = document.getElementById("gallery-strip-wrap");
  if (!wrap || wrap.dataset.dragReady === "1") return;
  wrap.dataset.dragReady = "1";

  const threshold = 8;
  let activeId = null;
  let startX = 0;
  let scrollStart = 0;
  let dragging = false;

  wrap.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    if (e.target.closest("button, a, input, textarea, select, label")) return;
    activeId = e.pointerId;
    startX = e.clientX;
    scrollStart = wrap.scrollLeft;
    dragging = false;
  });

  wrap.addEventListener(
    "pointermove",
    (e) => {
      if (activeId !== e.pointerId) return;
      const dx = e.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < threshold) return;
        dragging = true;
        wrap.classList.add("is-dragging");
      }
      e.preventDefault();
      wrap.scrollLeft = scrollStart - dx;
    },
    { passive: false }
  );

  const end = (e) => {
    if (activeId !== e.pointerId) return;
    activeId = null;
    dragging = false;
    wrap.classList.remove("is-dragging");
  };

  wrap.addEventListener("pointerup", end);
  wrap.addEventListener("pointercancel", end);
}

function renderBenchmarks() {
  const grid = document.getElementById("benchmark-grid");
  if (!grid) return;
  grid.innerHTML = benchmarkCards
    .map(
      (item) => `
        <article class="benchmark-card paper-${item.paperClass || "wif"}">
          <div class="benchmark-top">
            <h3><span class="paper-title-highlight">${item.title}</span></h3>
            <span class="venue-badge ${item.venueClass || "cvpr"}">${item.venue}</span>
          </div>
          <div class="benchmark-stats">
            ${item.stats
              .map(
                (stat) => `
                  <div class="benchmark-stat">
                    <span class="benchmark-stat-label">${stat.label}</span>
                    <strong class="benchmark-stat-value">${stat.value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
          <a class="benchmark-paper-link" href="${escapeAttribute(item.paperHref)}" target="_blank" rel="noopener noreferrer">Paper <span aria-hidden="true">↗</span></a>
        </article>
      `
    )
    .join("");
}

function renderFindings() {
  const grid = document.getElementById("findings-grid");
  if (!grid) return;
  grid.innerHTML = findings
    .map(
      (item) => `
        <article class="finding-card">
          <span class="finding-number">${item.number}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderResources() {
  const grid = document.getElementById("resources-grid");
  if (!grid) return;
  grid.innerHTML = resources
    .map(
      (item) => `
        <article class="resource-card paper-${item.paperClass || "wif"}">
          <div>
            <h3><span class="paper-title-highlight">${item.title}</span></h3>
          </div>
          <div class="citation-block">
            <button
              class="citation-copy-icon"
              type="button"
              data-copy-citation="${escapeAttribute(item.citation)}"
              aria-label="Copy citation"
              title="Copy citation"
            ></button>
            <pre>${item.citation}</pre>
          </div>
        </article>
      `
    )
    .join("");
}

function getContributorInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getContributorHue(name) {
  const text = String(name || "");
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 360;
  }
  return hash;
}

function renderContributorCard(contributor) {
  const name = contributor.name || "";
  const affiliation = contributor.affiliation ? `<span class="contributor-affiliation">${contributor.affiliation}</span>` : "";
  const initials = getContributorInitials(name);
  const hue = getContributorHue(name);
  const avatar = contributor.photo
    ? `<img class="contributor-avatar contributor-avatar-photo" src="${escapeAttribute(contributor.photo)}" alt="${escapeAttribute(name)}" loading="lazy">`
    : `<span class="contributor-avatar contributor-avatar-initials" style="--avatar-hue:${hue}" aria-hidden="true">${initials}</span>`;
  const inner = `${avatar}<span class="contributor-name">${name}</span>${affiliation}`;
  if (contributor.profile) {
    return `<a class="contributor-card is-linked" href="${escapeAttribute(contributor.profile)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  }
  return `<div class="contributor-card">${inner}</div>`;
}

function renderContributors() {
  const mainGrid = document.getElementById("contributors-main-grid");
  if (mainGrid) {
    const sorted = [...mainContributors].sort((a, b) => a.name.localeCompare(b.name));
    mainGrid.innerHTML = sorted.map(renderContributorCard).join("");
  }
  const otherGrid = document.getElementById("contributors-other-grid");
  if (otherGrid) {
    if (!otherContributors.length) {
      otherGrid.innerHTML = `<p class="contributors-empty">To be announced.</p>`;
    } else {
      const sorted = [...otherContributors].sort((a, b) => a.name.localeCompare(b.name));
      otherGrid.innerHTML = sorted.map(renderContributorCard).join("");
    }
  }
}

function getEvaluationCategory(example) {
  const categoryMap = {
    Cuisine: "cuisine",
    Attire: "attire",
    Instruments: "instrument",
    Food: "food",
    Clothing: "clothing",
    Place: "food",
    Country: "food",
    Ethnicity: "food"
  };
  return categoryMap[example.filter] || "cultural object";
}

function buildEvaluationPrompt(category) {
  return `Observe the image and determine from which country the ${category} originally comes from.\nReturn the country name only.\n\nIn this image, there is a cultural ${category} object. Determine the original name of this object.\nReturn the original name of this object only.`;
}

async function copyTextToClipboard(text, button) {
  const originalLabel = button.innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    button.innerHTML = `<span class="copy-icon" aria-hidden="true"></span><span>Copied!</span>`;
    button.classList.add("is-copied");
  } catch (_error) {
    button.innerHTML = `<span class="copy-icon" aria-hidden="true"></span><span>Failed</span>`;
    button.classList.add("is-copy-failed");
  }

  window.setTimeout(() => {
    button.classList.remove("is-copied");
    button.classList.remove("is-copy-failed");
    button.innerHTML = originalLabel;
  }, 1400);
}

async function copyImageToClipboard(imageUrl, button) {
  const originalLabel = button.innerHTML;
  button.classList.add("is-copying");
  button.innerHTML = `<span class="image-icon" aria-hidden="true"></span><span>Copying...</span>`;
  try {
    if (window.location.protocol === "file:") {
      throw new Error("Image clipboard copy cannot run from file://. Open this page through http://localhost:8000/ or HTTPS.");
    }
    if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
      throw new Error("Image clipboard API is not available in this browser.");
    }
    if (!window.isSecureContext) {
      throw new Error("Image clipboard copy requires a secure browser context.");
    }
    await navigator.clipboard.write([new ClipboardItem({ "image/png": getCardImagePngBlob(button, imageUrl) })]);
    button.innerHTML = `<span class="image-icon" aria-hidden="true"></span><span>Copied!</span>`;
    button.classList.add("is-copied");
  } catch (error) {
    console.warn("Failed to copy image to clipboard:", error);
    const message = window.location.protocol === "file:" ? "Use Localhost" : "Failed";
    button.innerHTML = `<span class="image-icon" aria-hidden="true"></span><span>${message}</span>`;
    button.classList.add("is-copy-failed");
  } finally {
    button.classList.remove("is-copying");
    window.setTimeout(() => {
      button.classList.remove("is-copied");
      button.classList.remove("is-copy-failed");
      button.innerHTML = originalLabel;
    }, 1400);
  }
}

async function copyTextFallback(text) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!copied) {
    throw new Error("Legacy copy command failed.");
  }
}

function getCardImagePngBlob(button, imageUrl) {
  const image =
    button.closest(".gallery-card-tourist")?.querySelector(".tourist-image-button img") ||
    document.querySelector(`img[src="${cssEscape(imageUrl)}"]`);

  if (image && image.complete && image.naturalWidth > 0) {
    return imageElementToPngBlob(image);
  }

  return fetchImageAsPngBlob(imageUrl);
}

function imageElementToPngBlob(image) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d");
    if (!context) {
      reject(new Error("Could not create canvas context."));
      return;
    }
    try {
      context.drawImage(image, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Could not convert image to PNG."));
        }
      }, "image/png");
    } catch (error) {
      reject(error);
    }
  });
}

async function fetchImageAsPngBlob(imageUrl) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  if (blob.type === "image/png") return blob;
  return blobToPngBlob(blob);
}

function blobToPngBlob(blob) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(blob);
    image.onload = () => {
      imageElementToPngBlob(image)
        .then(resolve)
        .catch(reject)
        .finally(() => URL.revokeObjectURL(objectUrl));
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Could not load image blob."));
    };
    image.src = objectUrl;
  });
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }
  return String(value).replace(/["\\]/g, "\\$&");
}

function attachInteractions() {
  document.addEventListener("click", (event) => {
    const datasetButton = event.target.closest("[data-dataset-id]");
    if (datasetButton) {
      state.datasetId = datasetButton.dataset.datasetId;
      state.filter = "All";
      renderDatasetTabs();
      renderFilters();
      renderGallery();
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      state.filter = filterButton.dataset.filter;
      renderFilters();
      renderGallery();
      return;
    }

    const zoomButton = event.target.closest("[data-zoom-src]");
    if (zoomButton) {
      openImageLightbox(zoomButton.dataset.zoomSrc, zoomButton.dataset.zoomCaption || "");
      return;
    }

    const citationButton = event.target.closest("[data-copy-citation]");
    if (citationButton) {
      const citationText = citationButton.dataset.copyCitation || "";
      if (!citationText) return;
      navigator.clipboard
        .writeText(citationText)
        .then(() => {
          citationButton.classList.add("is-copied");
          window.setTimeout(() => {
            citationButton.classList.remove("is-copied");
          }, 1200);
        })
        .catch(() => {});
      return;
    }

    const promptButton = event.target.closest("[data-copy-prompt]");
    if (promptButton) {
      const promptText = decodeURIComponent(promptButton.dataset.copyPrompt || "");
      if (!promptText) return;
      copyTextToClipboard(promptText, promptButton);
      return;
    }

    const imageButton = event.target.closest("[data-copy-image]");
    if (imageButton) {
      const imageUrl = imageButton.dataset.copyImage || "";
      if (!imageUrl) return;
      copyImageToClipboard(imageUrl, imageButton);
    }
  });
}

let lightboxState = null;

function ensureLightbox() {
  if (lightboxState) return lightboxState;
  const container = document.createElement("div");
  container.className = "image-lightbox";
  container.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image">×</button>
    <img class="lightbox-image" alt="Expanded gallery image" />
    <p class="lightbox-caption" aria-live="polite"></p>
  `;
  document.body.appendChild(container);
  const image = container.querySelector(".lightbox-image");
  const caption = container.querySelector(".lightbox-caption");
  const close = () => container.classList.remove("is-open");
  container.addEventListener("click", (e) => {
    if (e.target === container || e.target.closest(".lightbox-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  lightboxState = { container, image, caption, close };
  return lightboxState;
}

function openImageLightbox(src, captionText) {
  const { container, image, caption } = ensureLightbox();
  image.src = src;
  if (caption) caption.textContent = captionText || "";
  container.classList.add("is-open");
}

function setupReveal() {
  const cards = document.querySelectorAll(".reveal-card");
  if (!cards.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 90}ms`;
    observer.observe(card);
  });
}

function escapeAttribute(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function init() {
  renderHeroExamples();
  startHeroRotation();
  renderPapers();
  renderDatasetTabs();
  renderFilters();
  renderGallery();
  renderBenchmarks();
  renderFindings();
  renderResources();
  renderContributors();
  attachInteractions();
  initGalleryStripDrag();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
