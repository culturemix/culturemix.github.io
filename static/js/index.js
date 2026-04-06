const papers = [
  {
    index: "[1]",
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

const galleryDatasets = [
  {
    id: "world-in-a-frame",
    label: "World in a Frame",
    filters: ["All", "Food+Street", "Food+Restaurant", "Food+Person", "Background Shift"],
    examples: [
      {
        title: "Pho in a Seoul alley",
        filter: "Food+Street",
        prompt:
          "An overhead shot of a steaming bowl of Vietnamese pho placed on a street-side metal table in a Seoul night market, neon Hangul signs glowing in the background.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Ground truth: Vietnamese pho",
        tags: ["food", "street", "background shift"],
        badge: "Prompt-ready placeholder"
      },
      {
        title: "Tacos in a sushi bar",
        filter: "Food+Restaurant",
        prompt:
          "A plate of Mexican tacos served on a wooden counter inside a minimalist Japanese sushi bar, with chopsticks, noren curtains, and chefs behind the counter.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Ground truth: Mexican tacos",
        tags: ["food", "restaurant", "mixed cuisine"],
        badge: "Prompt-ready placeholder"
      },
      {
        title: "Kimchi with cross-cultural diner",
        filter: "Food+Person",
        prompt:
          "A close-up of kimchi jjigae being eaten by a Black male diner in a bright kitchen portrait setup, keeping the stew clearly visible as the focal food item.",
        imageRef: "static/images/carousel3.jpg",
        groundTruth: "Ground truth: Korean kimchi jjigae",
        tags: ["food", "person cue", "identity perturbation"],
        badge: "Prompt-ready placeholder"
      },
      {
        title: "Biryani with cultural backdrop swap",
        filter: "Background Shift",
        prompt:
          "A top-down editorial image of Indian biryani on a neutral plate, composited into a Scandinavian cafe interior with pale wood furniture and large windows.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "Ground truth: Indian biryani",
        tags: ["food", "background", "context sensitivity"],
        badge: "Prompt-ready placeholder"
      }
    ]
  },
  {
    id: "confused-tourist",
    label: "Confused Tourist",
    filters: ["All", "Cuisine", "Attire", "Instruments"],
    examples: [
      {
        title: "Cuisine under conflicting place cues",
        filter: "Cuisine",
        prompt:
          "A plated Ethiopian injera set as the focal dish in a polished travel-photo composition with environmental details suggesting a different cultural destination.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Ground truth: Ethiopian injera",
        tags: ["cuisine", "travel cue", "geo conflict"],
        badge: "Dataset-inspired"
      },
      {
        title: "Attire under mixed context",
        filter: "Attire",
        prompt:
          "A full-body fashion photo of a model wearing a Korean hanbok while the broader scene introduces cues associated with another country.",
        imageRef: "static/images/carousel3.jpg",
        groundTruth: "Ground truth: Korean hanbok",
        tags: ["attire", "culture cue", "robustness"],
        badge: "Dataset-inspired"
      },
      {
        title: "Instrument with contextual mismatch",
        filter: "Instruments",
        prompt:
          "A traditional sitar presented in a clean studio-style composition while surrounding context implies a different geographic origin than the instrument itself.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "Ground truth: Indian sitar",
        tags: ["instrument", "context shift", "mixed cue"],
        badge: "Dataset-inspired"
      },
      {
        title: "Cuisine collage example",
        filter: "Cuisine",
        prompt:
          "A stacked travel-style visual centered on ramen, where the dish remains visually dominant but the overall composition suggests a conflicting destination identity.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Ground truth: Japanese ramen",
        tags: ["cuisine", "stacked image", "adversarial"],
        badge: "Dataset-inspired"
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
        groundTruth: "Ground truth: Korean kimchi",
        tags: ["kimchi", "ethnicity", "food cue"],
        badge: "Benchmark-grounded"
      },
      {
        title: "Sushi with alternate diner",
        filter: "Food",
        prompt:
          "A close-up of sushi held by a white female diner in a neutral indoor environment with soft lighting and minimal background distraction.",
        imageRef: "static/images/carousel1.jpg",
        groundTruth: "Ground truth: Japanese sushi",
        tags: ["food", "person", "controlled context"],
        badge: "Benchmark-grounded"
      },
      {
        title: "Clothing and place cue shift",
        filter: "Clothing",
        prompt:
          "A person wearing a traditional Thai outfit while holding a Turkish dish, photographed in a simple studio scene to isolate clothing and food signals.",
        imageRef: "static/images/carousel2.jpg",
        groundTruth: "Ground truth: Thai attire / Turkish dish mixture",
        tags: ["clothing", "food", "cue conflict"],
        badge: "Benchmark-grounded"
      },
      {
        title: "Country-sensitive dish framing",
        filter: "Country",
        prompt:
          "A plate of jollof rice shown with a diner whose ethnicity does not match common web priors for the dish, keeping the image composition realistic and balanced.",
        imageRef: "static/images/carousel4.jpg",
        groundTruth: "Ground truth: West African jollof rice",
        tags: ["country", "low-resource culture", "bias test"],
        badge: "Benchmark-grounded"
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
    title: "World in a Frame",
    description: "Food VQA benchmark for mixed-cultural scenes released as CultureMix.",
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
    title: "Confused Tourist",
    description: "Cultural robustness benchmark spanning cuisine, attire, and instruments.",
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
    title: "MixCuBe",
    description: "Cross-cultural bias benchmark for MLLMs in person-food mixture settings.",
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
        <article class="paper-card reveal-card">
          <div class="paper-index">${paper.index}</div>
          <div class="paper-main">
            <div class="paper-title-row">
              <h3>${paper.fullTitle}</h3>
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

  const visible = dataset.examples.filter((example) => state.filter === "All" || example.filter === state.filter);
  grid.innerHTML = visible
    .map(
      (example) => `
        <article class="gallery-card">
          <div class="gallery-image" style="background-image: linear-gradient(135deg, rgba(100,116,139,0.28), rgba(30,41,59,0.55)), url('${example.imageRef}')">
            <span class="gallery-badge">${example.badge}</span>
            <button class="gallery-image-copy" type="button" data-copy-kind="image" data-image-src="${escapeAttribute(example.imageRef)}">
              Click to copy image
            </button>
          </div>
          <div class="gallery-content">
            <h3>${example.title}</h3>
            <p>${example.prompt}</p>
            <div class="ground-truth-row">
              <span class="ground-truth-pill">${example.groundTruth}</span>
            </div>
            <div class="gallery-tags">
              ${example.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="gallery-actions">
              <button class="copy-button" type="button" data-copy-kind="prompt" data-copy-text="${escapeAttribute(example.prompt)}">Copy prompt</button>
              <span class="copy-status" aria-live="polite"></span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
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
        <article class="resource-card">
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="resource-links">
              ${item.links.map((link) => `<a class="resource-link" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("")}
              ${item.codeLinks.map((link) => `<a class="resource-link" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("")}
            </div>
          </div>
          <pre>${item.citation}</pre>
        </article>
      `
    )
    .join("");
}

function attachInteractions() {
  document.addEventListener("click", async (event) => {
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

    const copyButton = event.target.closest("[data-copy-text], [data-image-src]");
    if (copyButton) {
      const kind = copyButton.dataset.copyKind;
      const status = copyButton.parentElement.querySelector(".copy-status");
      try {
        if (kind === "image") {
          const imageUrl = copyButton.dataset.imageSrc;
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          if (navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([new ClipboardItem({ [blob.type || "image/png"]: blob })]);
            if (status) status.textContent = "Image copied";
          } else {
            throw new Error("Image clipboard unsupported");
          }
        } else {
          const text = copyButton.dataset.copyText;
          await navigator.clipboard.writeText(text);
          if (status) status.textContent = "Prompt copied";
        }
        flashCopiedState(copyButton);
      } catch (error) {
        if (status) status.textContent = kind === "image" ? "Image copy unavailable" : "Clipboard unavailable";
      }
      window.setTimeout(() => {
        if (status) status.textContent = "";
      }, 1800);
    }
  });
}

function flashCopiedState(element) {
  element.classList.add("is-copied");
  window.setTimeout(() => {
    element.classList.remove("is-copied");
  }, 2000);
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
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
