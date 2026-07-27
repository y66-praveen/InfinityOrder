const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const ALL_TAB = "All";
const GROUPED_TABS = ["Spider Nexus", "Ultimate Brand New Day Watch Order"];

let currentSaga = ALL_TAB;
let currentTypeFilter = "all";
let searchQuery = "";
let sortDir = "asc"; // 'asc' = oldest first, 'desc' = newest first

const sagaTabsEl = document.getElementById("sagaTabs");
const typeFiltersEl = document.getElementById("typeFilters");
const listContainer = document.getElementById("listContainer");
const searchInput = document.getElementById("searchInput");
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.getElementById("progressFill");
const resetBtn = document.getElementById("resetBtn");
const sortBtn = document.getElementById("sortBtn");
const sortLabel = document.getElementById("sortLabel");
const sortIcon = document.getElementById("sortIcon");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const menuToggle = document.getElementById("menuToggle");

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDesc = document.getElementById("modalDesc");
const modalBadge = document.getElementById("modalBadge");

const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.5L9.5 18L20 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function formatDate(item) {
  if (!item.month) return `${item.year} (TBA)`;
  return `${MONTHS[item.month]} ${item.year}`;
}

function sortValue(item) {
  return item.year * 100 + (item.month || 13);
}

function isReleased(item) {
  if (!item.month) return false; // no confirmed date yet
  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth() + 1;
  if (item.year > curYear) return false;
  if (item.year === curYear && item.month > curMonth) return false;
  return true;
}

function getWatched() {
  return JSON.parse(localStorage.getItem("mcu_watched") || "{}");
}
function setWatched(key, value) {
  const w = getWatched();
  w[key] = value;
  localStorage.setItem("mcu_watched", JSON.stringify(w));
}
function itemKey(saga, title) {
  return saga + "::" + title;
}

function getAllItemsMerged() {
  const merged = [];
  Object.keys(DATA).forEach(saga => {
    DATA[saga].forEach(item => {
      if (item.linkSaga) return; // already represented under its original saga
      merged.push({ ...item, saga });
    });
  });
  return merged;
}

function getCurrentSagaItems() {
  if (currentSaga === ALL_TAB) {
    return getAllItemsMerged();
  }
  return DATA[currentSaga].map(item => ({ ...item, saga: item.linkSaga || currentSaga }));
}

function renderTabs() {
  sagaTabsEl.innerHTML = "";
  const allNames = [ALL_TAB, ...Object.keys(DATA)];
  allNames.forEach(saga => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (saga === ALL_TAB ? " all-tab" : "") + (saga === currentSaga ? " active" : "");
    btn.textContent = saga === ALL_TAB ? "All (Release Order)" : saga;
    btn.addEventListener("click", () => {
      currentSaga = saga;
      currentTypeFilter = "all";
      searchInput.value = "";
      searchQuery = "";
      closeMobileMenu();
      renderTabs();
      renderTypeFilters();
      renderList();
    });
    sagaTabsEl.appendChild(btn);
  });
}

function closeMobileMenu() {
  sagaTabsEl.classList.remove("mobile-open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open saga navigation");
}

function toggleMobileMenu() {
  const isOpen = sagaTabsEl.classList.toggle("mobile-open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close saga navigation" : "Open saga navigation");
}

function renderTypeFilters() {
  const items = getCurrentSagaItems();
  const hasMovies = items.some(i => i.type === "movie");
  const hasShows = items.some(i => i.type === "show");

  sortBtn.classList.toggle("hidden", currentSaga === "Ultimate Brand New Day Watch Order");

  if (!(hasMovies && hasShows)) {
    typeFiltersEl.classList.add("hidden");
    return;
  }
  typeFiltersEl.classList.remove("hidden");
  typeFiltersEl.innerHTML = "";
  const options = [["all", "All"], ["movie", "Movies"], ["show", "Shows"]];
  options.forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "type-btn" + (currentTypeFilter === key ? " active" : "");
    btn.textContent = label;
    btn.addEventListener("click", () => {
      currentTypeFilter = key;
      renderTypeFilters();
      renderList();
    });
    typeFiltersEl.appendChild(btn);
  });
}

function buildItemCard(item, no, watched) {
  const key = itemKey(item.saga, item.title);
  const isWatched = !!watched[key];

  const card = document.createElement("div");
  card.className = "item-card" + (isWatched ? " watched" : "");

  const sagaTag = currentSaga === ALL_TAB ? `<span class="item-saga-tag">${item.saga}</span>` : "";
  const released = isReleased(item);
  const checkboxArea = released
    ? `<label class="item-checkbox-wrap">
         <input type="checkbox" class="item-checkbox" ${isWatched ? "checked" : ""}>
         <span class="checkbox-visual">${CHECK_SVG}</span>
       </label>`
    : `<span class="upcoming-tag">TBR</span>`;

  card.innerHTML = `
    <span class="item-no">${no}.</span>
    <div class="item-main">
      <a class="item-title-link">${item.title}</a>${sagaTag}
      <span class="item-date">${formatDate(item)}</span>
    </div>
    <span class="item-type-badge ${item.type}">${item.type}</span>
    ${checkboxArea}
  `;

  const checkboxInput = card.querySelector(".item-checkbox");
  if (checkboxInput) {
    checkboxInput.addEventListener("change", (e) => {
      setWatched(key, e.target.checked);
      card.classList.toggle("watched", e.target.checked);
      updateProgress();
    });
  }

  card.querySelector(".item-title-link").addEventListener("click", () => openModal(item));

  return card;
}

function renderList() {
  const watched = getWatched();
  let items = getCurrentSagaItems();

  if (currentTypeFilter !== "all") {
    items = items.filter(i => i.type === currentTypeFilter);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    items = items.filter(i => i.title.toLowerCase().includes(q));
  }

  listContainer.innerHTML = "";

  if (items.length === 0) {
    listContainer.innerHTML = `<div class="empty-msg">No titles match.</div>`;
    updateProgress();
    return;
  }

  const isGroupedTab = GROUPED_TABS.includes(currentSaga);
  let runningNo = 0;

  if (isGroupedTab) {
    const orderedGroupNames = [];
    const grouped = {};
    items.forEach(item => {
      const g = item.group || "";
      if (!grouped[g]) { grouped[g] = []; orderedGroupNames.push(g); }
      grouped[g].push(item);
    });

    orderedGroupNames.forEach(gName => {
      const usesFixedOrder = grouped[gName].some(i => typeof i.order === "number");
      const groupItems = grouped[gName].slice().sort((a, b) => {
        if (usesFixedOrder) return (a.order || 0) - (b.order || 0);
        return sortDir === "asc" ? sortValue(a) - sortValue(b) : sortValue(b) - sortValue(a);
      });

      if (gName) {
        const heading = document.createElement("div");
        heading.className = "group-heading";
        heading.textContent = gName;
        listContainer.appendChild(heading);
      }

      groupItems.forEach(item => {
        runningNo++;
        listContainer.appendChild(buildItemCard(item, runningNo, watched));
      });
    });
  } else {
    items.sort((a, b) => sortDir === "asc" ? sortValue(a) - sortValue(b) : sortValue(b) - sortValue(a));
    items.forEach(item => {
      runningNo++;
      listContainer.appendChild(buildItemCard(item, runningNo, watched));
    });
  }

  updateProgress();
}

function updateProgress() {
  const watched = getWatched();
  const items = getCurrentSagaItems();
  const total = items.length;
  const done = items.filter(i => watched[itemKey(i.saga, i.title)]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  progressLabel.textContent = `${done}/${total} watched`;
  progressFill.style.width = pct + "%";
}

function openModal(item) {
  modalBadge.textContent = item.type;
  modalTitle.textContent = item.title;
  modalDate.textContent = formatDate(item);
  modalDesc.textContent = item.desc;
  modalOverlay.classList.add("open");
}
function closeModal() {
  modalOverlay.classList.remove("open");
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeMobileMenu();
  }
});

menuToggle.addEventListener("click", toggleMobileMenu);
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) closeMobileMenu();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderList();
});

sortBtn.addEventListener("click", () => {
  sortDir = sortDir === "asc" ? "desc" : "asc";
  sortLabel.textContent = sortDir === "asc" ? "Oldest first" : "Newest first";
  sortIcon.textContent = sortDir === "asc" ? "↓" : "↑";
  renderList();
});

resetBtn.addEventListener("click", () => {
  if (confirm("Reset watched progress for all sagas?")) {
    localStorage.removeItem("mcu_watched");
    renderList();
  }
});

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderTabs();
renderTypeFilters();
renderList();