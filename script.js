const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const ALL_TAB = "All";
const GROUPED_TABS = ["Spider Nexus", "Ultimate Brand New Day Watch Order"];

const THEME_KEY = "infinity_order_theme";
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
}
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
});

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
const modalDesc = document.getElementById("modalDesc");
const modalBadge = document.getElementById("modalBadge");
const modalMetaRow = document.getElementById("modalMetaRow");
const modalPoster = document.getElementById("modalPoster");
const modalPosterIcon = document.getElementById("modalPosterIcon");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.5L9.5 18L20 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function formatDate(item) {
  if (!item.month) return `${item.year} (TBA)`;
  return `${MONTHS[item.month]} ${item.year}`;
}

function formatRuntime(item) {
  if (item.runtime == null) return "TBA";
  if (item.episodes) {
    const totalMin = item.runtime * item.episodes;
    const h = Math.floor(totalMin / 60), m = totalMin % 60;
    return `${item.episodes} eps · ~${item.runtime}m each (≈${h}h ${m}m total)`;
  }
  const h = Math.floor(item.runtime / 60), m = item.runtime % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

const ICON_CALENDAR = `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5.5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M4 9.5H20M8 3.5V6.5M16 3.5V6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const ICON_CLOCK = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M12 7.5V12L15 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_LAYERS = `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5L20.5 8L12 12.5L3.5 8L12 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3.5 12L12 16.5L20.5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 16L12 20.5L20.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_FILM = `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 4V20M16 4V20M3 9H8M16 9H21M3 15H8M16 15H21" stroke="currentColor" stroke-width="1.5"/></svg>`;
const ICON_TV = `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21H16M9 3L12 6L15 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

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

  const navIndex = modalNavList.length - 1;
  card.querySelector(".item-title-link").addEventListener("click", () => {
    openModalByIndex(navIndex);
  });

  return card;
}

let modalNavList = [];
let modalNavIndex = -1;

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
  modalNavList = [];

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
        modalNavList.push(item);
        listContainer.appendChild(buildItemCard(item, runningNo, watched));
      });
    });
  } else {
    items.sort((a, b) => sortDir === "asc" ? sortValue(a) - sortValue(b) : sortValue(b) - sortValue(a));
    items.forEach(item => {
      runningNo++;
      modalNavList.push(item);
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

function openModalByIndex(idx) {
  if (idx < 0 || idx >= modalNavList.length) return;
  modalNavIndex = idx;
  openModal(modalNavList[idx]);
}

function openModal(item) {
  modalBadge.textContent = item.type;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;

  modalPoster.className = "modal-poster " + (item.type === "movie" ? "poster-movie" : "poster-show");
  modalPosterIcon.innerHTML = item.type === "movie" ? ICON_FILM : ICON_TV;

  modalMetaRow.innerHTML = `
    <span class="modal-meta-item">${ICON_CALENDAR}${formatDate(item)}</span>
    <span class="modal-meta-item">${ICON_CLOCK}${formatRuntime(item)}</span>
    <span class="modal-meta-item">${ICON_LAYERS}${item.saga}</span>
  `;

  modalPrev.disabled = modalNavIndex <= 0;
  modalNext.disabled = modalNavIndex >= modalNavList.length - 1;

  modalOverlay.classList.add("open");
}
function closeModal() {
  modalOverlay.classList.remove("open");
}

modalPrev.addEventListener("click", () => openModalByIndex(modalNavIndex - 1));
modalNext.addEventListener("click", () => openModalByIndex(modalNavIndex + 1));

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeMobileMenu();
  }
  if (modalOverlay.classList.contains("open")) {
    if (e.key === "ArrowLeft") openModalByIndex(modalNavIndex - 1);
    if (e.key === "ArrowRight") openModalByIndex(modalNavIndex + 1);
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