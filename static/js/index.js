const papers = [
  {
    index: "[1]",
    paperClass: "wif",
    fullTitle: "World in a Frame: Understanding Culture Mixing as a New Challenge for Vision-Language Models",
    venue: "CVPR 2026",
    venueClass: "cvpr",
    topic: "Food VQA",
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
    topic: "Culture Perturbation",
    description:
      "Builds a cultural adversarial robustness suite that reveals how VLMs misread cuisine, attire, and instruments under mixed geographic context.",
    bullets: [
      "Introduces 5,451 examples spanning cuisine, attire, and musical instruments.",
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
    topic: "Ethnicity Perturbation",
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
        title: "Soto with Japanese travel cues",
        filter: "Cuisine",
        prompt:
          "A bowl of Indonesian soto presented as the focal dish in a polished travel-photo composition, while the surrounding scene suggests Japan rather than Indonesia.",
        imageRef: "static/images/gallery/vlm_tourist/soto_japan.jpeg",
        groundTruthCountry: "Indonesia",
        predictedCountry: "Japan",
        groundTruthItem: "Soto",
        predictedItem: "Ramen",
        tags: ["cuisine", "place conflict"]
      },
      {
        title: "Borscht with Spanish destination cues",
        filter: "Cuisine",
        prompt:
          "A travel-style image centered on borscht, with the food remaining visually dominant while the broader composition suggests Spain rather than its expected cultural origin.",
        imageRef: "static/images/gallery/vlm_tourist/borscht_spain.jpeg",
        groundTruthCountry: "Russia",
        predictedCountry: "Spain",
        groundTruthItem: "Borscht",
        predictedItem: "Gazpacho",
        tags: ["cuisine", "stacked framing"]
      },
      {
        title: "Kozhukh with Romanian street cues",
        filter: "Attire",
        prompt:
          "A plated serving of kozhukh as the clear subject, photographed in a street scene where signage and architecture imply Romania rather than the dish's expected origin.",
        imageRef: "static/images/gallery/vlm_tourist/kozukh_romania.jpeg",
        groundTruthCountry: "Ukraine",
        predictedCountry: "Romania",
        groundTruthItem: "Kozhukh",
        predictedItem: "Cojoc",
        tags: ["cuisine", "street context"]
      },
      {
        title: "Tacos with European plaza backdrop",
        filter: "Cuisine",
        prompt:
          "Mexican street tacos on a metal tray, shot so the food is sharp while the plaza and facades behind suggest a European city rather than Mexico.",
        imageRef: "static/images/carousel4.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Mexican tacos",
        predictedItem: "",
        tags: ["cuisine", "architecture cue"]
      },
      {
        title: "Hanbok with non-Korean scene cues",
        filter: "Attire",
        prompt:
          "A full-body fashion photo of a model wearing a Korean hanbok while the broader scene introduces cues associated with another country.",
        imageRef: "static/images/carousel3.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Korean hanbok",
        predictedItem: "",
        tags: ["attire", "scene mismatch"]
      },
      {
        title: "Sari with desert landmark backdrop",
        filter: "Attire",
        prompt:
          "A woman in a vivid Indian sari, framed against sandstone monuments and heat haze more typical of the Middle East than the Indian subcontinent.",
        imageRef: "static/images/carousel2.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Indian sari",
        predictedItem: "",
        tags: ["attire", "landmark confusion"]
      },
      {
        title: "Kilt with Mediterranean harbor",
        filter: "Attire",
        prompt:
          "Scottish kilt outfit in focus, posed on a waterfront with pastel buildings and boats that read as Mediterranean rather than Scotland.",
        imageRef: "static/images/carousel4.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Scottish kilt",
        predictedItem: "",
        tags: ["attire", "harbor context"]
      },
      {
        title: "Sitar with non-Indian studio props",
        filter: "Instruments",
        prompt:
          "A traditional sitar presented in a clean studio-style composition while surrounding context implies a different geographic origin than the instrument itself.",
        imageRef: "static/images/carousel4.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Indian sitar",
        predictedItem: "",
        tags: ["instrument", "prop conflict"]
      },
      {
        title: "Bagpipes with tropical foliage",
        filter: "Instruments",
        prompt:
          "Highland bagpipes held by a musician, with lush tropical plants and bright sun in the background inconsistent with Scottish Highlands imagery.",
        imageRef: "static/images/carousel1.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Scottish bagpipes",
        predictedItem: "",
        tags: ["instrument", "vegetation cue"]
      },
      {
        title: "Taiko drum in a Gothic hall",
        filter: "Instruments",
        prompt:
          "Japanese taiko drums on stands, photographed in a stone Gothic interior that clashes with typical festival or shrine settings for this instrument.",
        imageRef: "static/images/carousel2.jpg",
        groundTruthCountry: "",
        predictedCountry: "",
        groundTruthItem: "Japanese taiko",
        predictedItem: "",
        tags: ["instrument", "architecture"]
      }
    ]
  },
  {
    id: "mixcube",
    label: "MixCuBe",
    filters: ["All", "Food", "Clothing", "Place", "Country", "Ethnicity"],
    examples: [
      {
        title: "Kimchi with identity perturbation",
        filter: "Ethnicity",
        prompt:
          "A portrait-style image of an African man eating kimchi with chopsticks at a plain table, shot so the kimchi remains sharp and visually central.",
        imageRef: "static/images/carousel3.jpg",
        groundTruth: "Korean kimchi",
        tags: ["food", "ethnicity"]
      },
      {
        title: "Sushi with alternate diner",
        filter: "Food",
        prompt:
          "A close-up of sushi held by a white female diner in a neutral indoor environment with soft lighting and minimal background distraction.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Japanese sushi",
        tags: ["food", "diner cue"]
      },
      {
        title: "Bibimbap with diner ethnicity swap",
        filter: "Food",
        prompt:
          "Korean bibimbap in a stone bowl as the focal dish, with a diner whose appearance does not match typical Korean representation in stock imagery.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Korean bibimbap",
        tags: ["food", "representation"]
      },
      {
        title: "Thai outfit with Turkish dish",
        filter: "Clothing",
        prompt:
          "A person wearing a traditional Thai outfit while holding a Turkish dish, photographed in a simple studio scene to isolate clothing and food signals.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Thai attire / Turkish dish",
        tags: ["clothing", "food"]
      },
      {
        title: "Kimono with Italian pasta plate",
        filter: "Clothing",
        prompt:
          "A model in formal Japanese kimono seated with a plate of spaghetti carbonara in frame, both elements clearly visible.",
        imageRef: "static/images/carousel3.jpg",
        groundTruth: "Japanese kimono + Italian pasta",
        tags: ["clothing", "food"]
      },
      {
        title: "Sari with English afternoon tea",
        filter: "Clothing",
        prompt:
          "Indian sari in bright silk, beside a tiered stand of scones and tea cups suggesting British afternoon tea.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Indian sari",
        tags: ["clothing", "place ritual"]
      },
      {
        title: "Croissant with East Asian street signage",
        filter: "Place",
        prompt:
          "A French croissant in sharp focus with blurred Hangul signage and Seoul-style storefronts in the background.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "French croissant",
        tags: ["food", "place cue"]
      },
      {
        title: "Tacos with Japanese tatami corner",
        filter: "Place",
        prompt:
          "Mexican tacos on a wooden board, placed on tatami and low table with shoji light patterns suggesting Japan.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Mexican tacos",
        tags: ["food", "interior place"]
      },
      {
        title: "Jollof with mismatched diner prior",
        filter: "Country",
        prompt:
          "A plate of jollof rice shown with a diner whose ethnicity does not match common web priors for the dish, keeping the image composition realistic and balanced.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "West African jollof rice",
        tags: ["country", "jollof"]
      },
      {
        title: "Peking duck with Nordic diner",
        filter: "Country",
        prompt:
          "Peking duck carved at table, with a blonde diner in Scandinavian casual dress as the main human subject beside the dish.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Chinese Peking duck",
        tags: ["country", "food identity"]
      }
    ]
  }
];

const benchmarkCards = [
  {
    title: "World in a Frame / CultureMix",
    venue: "CVPR 2026",
    stats: [
      { value: "23,031", label: "benchmark rows" },
      { value: "4", label: "food-mixing subtasks" },
      { value: "10", label: "LVLMs evaluated" },
      { value: "Context-heavy", label: "failure pattern" }
    ],
    bullets: [
      "Targets food VQA under mixed-context scenes.",
      "Uses diffusion-generated, human-verified images.",
      "Measures how background and co-occurring food cues shift predictions."
    ]
  },
  {
    title: "Confused Tourist",
    venue: "CVPR 2026",
    stats: [
      { value: "5,451", label: "examples" },
      { value: "3", label: "domains" },
      { value: "Cuisine · Attire · Instruments", label: "categories" },
      { value: "Mixed cues", label: "stress style" }
    ],
    bullets: [
      "Focuses on cuisine, attire, and musical instruments.",
      "Evaluates recognition under culturally mixed visual settings.",
      "Shows that cue conflict destabilizes cultural identification."
    ]
  },
  {
    title: "MixCuBe",
    venue: "C3NLP Workshop",
    stats: [
      { value: "2,475", label: "images" },
      { value: "5", label: "countries" },
      { value: "4", label: "ethnicities" },
      { value: "58%", label: "reported max gap" }
    ],
    bullets: [
      "Examines person-food cultural mixtures.",
      "Uses ethnicity perturbations to stress-test recognition.",
      "Shows larger robustness gaps for low-resource cultures."
    ]
  }
];

const findings = [
  {
    title: "Models over-index on co-occurring cues",
    text: "Across all three projects, secondary context often overrides the target cultural item."
  },
  {
    title: "Mixed-culture scenes expose hidden failures",
    text: "Performance that looks stable in isolated settings breaks once multiple cultural signals co-exist."
  },
  {
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

const state = {
  datasetId: galleryDatasets[0].id,
  filter: "All",
  heroOffset: 0
};

let heroTimer = null;

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
          <div class="paper-main">
            <div class="paper-title-row">
              <h3><span class="paper-title-highlight">${paper.fullTitle}</span></h3>
              <span class="venue-badge ${paper.venueClass}">${paper.venue}</span>
            </div>
            <div class="paper-meta">
              <p>${paper.description}</p>
              <ul class="paper-bullets">
                ${paper.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="paper-side">
            <span class="topic-pill">${paper.topic}</span>
            <div class="paper-links">
              ${paper.links
                .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
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

  const visible = dataset.examples.filter((example) => state.filter === "All" || example.filter === state.filter);
  grid.innerHTML = visible
    .map(
      (example) => `
        <article class="gallery-card ${dataset.id === "confused-tourist" ? "gallery-card-tourist" : ""}">
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
              ${
                dataset.id === "confused-tourist"
                  ? `<button
                class="citation-copy-icon gallery-copy-icon"
                type="button"
                data-write-eval-prompt="true"
                data-copy-category="${escapeAttribute(getEvaluationCategory(example))}"
                aria-label="Copy evaluation prompt"
                title="Copy evaluation prompt"
              ></button>`
                  : ""
              }
            </div>
            ${
              example.cultureCue
                ? `<p class="gallery-culture-lines"><span class="culture-label">Food:</span> ${example.cultureCue.food}<br><span class="culture-label">Background:</span> ${example.cultureCue.background}</p>`
                : ""
            }
            ${example.description ? `<p class="gallery-description">${example.description}</p>` : ""}
            <p class="gallery-prompt">${example.prompt}</p>
            ${
              dataset.id === "confused-tourist"
                ? `<div class="tourist-eval-grid">
              ${renderEvalField("Ground Truth Country", example.groundTruthCountry)}
              ${renderEvalField("Predicted Country", example.predictedCountry)}
              ${renderEvalField("Ground Truth Item", example.groundTruthItem)}
              ${renderEvalField("Predicted Item", example.predictedItem)}
            </div>`
                : `<div class="ground-truth-row">
              <span class="ground-truth-pill">${example.groundTruth || example.groundTruthItem || ""}</span>
            </div>`
            }
          </div>
        </article>
      `
    )
    .join("");

  const strip = document.getElementById("gallery-strip-wrap");
  if (strip) strip.scrollLeft = 0;
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
        <article class="benchmark-card">
          <div class="benchmark-top">
            <h3>${item.title}</h3>
            <span class="venue-badge ${item.venue === "C3NLP Workshop" ? "cl" : "cvpr"}">${item.venue}</span>
          </div>
          <p>${item.bullets[0]}</p>
          <div class="benchmark-stats">
            ${item.stats
              .map(
                (stat) => `
                  <div class="benchmark-stat">
                    <strong>${stat.value}</strong>
                    <span>${stat.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <ul class="benchmark-list">
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
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

function renderEvalField(label, value) {
  const displayValue = value && value.trim() ? value : "Fill this";
  const emptyClass = value && value.trim() ? "" : " is-empty";
  const toneClass = label.toLowerCase().includes("ground truth") ? " is-ground-truth" : " is-predicted";
  return `<div class="tourist-eval-cell${toneClass}${emptyClass}">
    <span class="tourist-eval-label">${label}</span>
    <strong class="tourist-eval-value">${displayValue}</strong>
  </div>`;
}

function buildEvaluationPrompt(category) {
  return `Observe the image and determine from which country the ${category} originally comes from.\nReturn the country name only.\n\nIn this image, there is a cultural ${category} object. Determine the original name of this object.\nReturn the original name of this object only.`;
}

async function writeEvaluationPrompt(category, button) {
  const promptText = buildEvaluationPrompt(category);
  try {
    await navigator.clipboard.writeText(promptText);
    button.classList.add("is-copied");
  } catch (_error) {
    button.classList.add("is-copy-failed");
  }

  window.setTimeout(() => {
    button.classList.remove("is-copied");
    button.classList.remove("is-copy-failed");
  }, 1400);
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

    const tryButton = event.target.closest("[data-write-eval-prompt]");
    if (tryButton) {
      const category = tryButton.dataset.copyCategory || "cultural object";
      writeEvaluationPrompt(category, tryButton);
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
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
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
  attachInteractions();
  initGalleryStripDrag();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
