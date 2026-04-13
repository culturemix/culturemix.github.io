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
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2511.22787" }]
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
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2511.17004" }]
  },
  {
    index: "[3]",
    paperClass: "ttk",
    fullTitle: "When Tom Eats Kimchi: Evaluating Cultural Bias of Multimodal Large Language Models in Cultural Mixture Contexts",
    venue: "CL Workshop",
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
    image: "static/images/carousel2.jpg"
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
        title: "Injera with mismatched travel context",
        filter: "Cuisine",
        prompt:
          "A plated Ethiopian injera set as the focal dish in a polished travel-photo composition with environmental details suggesting a different cultural destination.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Ethiopian injera",
        tags: ["cuisine", "place conflict"]
      },
      {
        title: "Ramen with conflicting destination cues",
        filter: "Cuisine",
        prompt:
          "A stacked travel-style visual centered on ramen, where the dish remains visually dominant but the overall composition suggests a conflicting destination identity.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Japanese ramen",
        tags: ["cuisine", "stacked framing"]
      },
      {
        title: "Pho under non-Vietnamese street cues",
        filter: "Cuisine",
        prompt:
          "A steaming bowl of pho as the clear subject, photographed in a busy street frame where signage and architecture imply a different country than Vietnam.",
        imageRef: "static/images/carousel3.jpg",
        groundTruth: "Vietnamese pho",
        tags: ["cuisine", "street context"]
      },
      {
        title: "Tacos with European plaza backdrop",
        filter: "Cuisine",
        prompt:
          "Mexican street tacos on a metal tray, shot so the food is sharp while the plaza and facades behind suggest a European city rather than Mexico.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "Mexican tacos",
        tags: ["cuisine", "architecture cue"]
      },
      {
        title: "Hanbok with non-Korean scene cues",
        filter: "Attire",
        prompt:
          "A full-body fashion photo of a model wearing a Korean hanbok while the broader scene introduces cues associated with another country.",
        imageRef: "static/images/carousel3.jpg",
        groundTruth: "Korean hanbok",
        tags: ["attire", "scene mismatch"]
      },
      {
        title: "Sari with desert landmark backdrop",
        filter: "Attire",
        prompt:
          "A woman in a vivid Indian sari, framed against sandstone monuments and heat haze more typical of the Middle East than the Indian subcontinent.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Indian sari",
        tags: ["attire", "landmark confusion"]
      },
      {
        title: "Kilt with Mediterranean harbor",
        filter: "Attire",
        prompt:
          "Scottish kilt outfit in focus, posed on a waterfront with pastel buildings and boats that read as Mediterranean rather than Scotland.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "Scottish kilt",
        tags: ["attire", "harbor context"]
      },
      {
        title: "Sitar with non-Indian studio props",
        filter: "Instruments",
        prompt:
          "A traditional sitar presented in a clean studio-style composition while surrounding context implies a different geographic origin than the instrument itself.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "Indian sitar",
        tags: ["instrument", "prop conflict"]
      },
      {
        title: "Bagpipes with tropical foliage",
        filter: "Instruments",
        prompt:
          "Highland bagpipes held by a musician, with lush tropical plants and bright sun in the background inconsistent with Scottish Highlands imagery.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Scottish bagpipes",
        tags: ["instrument", "vegetation cue"]
      },
      {
        title: "Taiko drum in a Gothic hall",
        filter: "Instruments",
        prompt:
          "Japanese taiko drums on stands, photographed in a stone Gothic interior that clashes with typical festival or shrine settings for this instrument.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Japanese taiko",
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
    venue: "CL Workshop",
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
        <article class="gallery-card">
          <div class="gallery-image" style="background-image: linear-gradient(135deg, rgba(100,116,139,0.28), rgba(30,41,59,0.55)), url('${example.imageRef}')">
            <button class="gallery-image-zoom" type="button" data-zoom-src="${escapeAttribute(example.imageRef)}" data-zoom-caption="${escapeAttribute(example.cultureCue ? `Food: ${example.cultureCue.food} · Background: ${example.cultureCue.background}` : example.groundTruth)}">
              <span class="gallery-image-zoom-label"></span>
            </button>
          </div>
          <div class="gallery-content">
            <h3>${example.title}</h3>
            ${
              example.cultureCue
                ? `<p class="gallery-culture-lines"><span class="culture-label">Food:</span> ${example.cultureCue.food}<br><span class="culture-label">Background:</span> ${example.cultureCue.background}</p>`
                : ""
            }
            ${example.description ? `<p class="gallery-description">${example.description}</p>` : ""}
            <p class="gallery-prompt">${example.prompt}</p>
            <div class="ground-truth-row">
              <span class="ground-truth-pill">${example.groundTruth}</span>
            </div>
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
            <span class="venue-badge ${item.venue === "CL Workshop" ? "cl" : "cvpr"}">${item.venue}</span>
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
