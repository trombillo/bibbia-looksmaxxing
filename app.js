// ============================================================================
// APP.JS v5.0 — MOTORE HUB, OMNI-SEARCH, EVIDENZIAZIONE, PREFERITI & SVG
// ============================================================================

function getMasterEncyclopedia() {
    return [
        ...(typeof ENCYCLOPEDIA_PART_1 !== 'undefined' ? ENCYCLOPEDIA_PART_1 : []),
        ...(typeof ENCYCLOPEDIA_PART_2 !== 'undefined' ? ENCYCLOPEDIA_PART_2 : []),
        ...(typeof ENCYCLOPEDIA_PART_3 !== 'undefined' ? ENCYCLOPEDIA_PART_3 : []),
        ...(typeof ENCYCLOPEDIA_PART_4 !== 'undefined' ? ENCYCLOPEDIA_PART_4 : []),
        ...(typeof ENCYCLOPEDIA_PART_5 !== 'undefined' ? ENCYCLOPEDIA_PART_5 : [])
    ];
}

const SEMANTIC_SYNONYMS = {
    "mewing": ["lingua", "palato", "miofunzionale", "deglutizione", "palatoglosso"],
    "hollow": ["ogee", "fossa canina", "buccinatori", "zigomi", "malare"],
    "hunter": ["canthal", "deep-set", "uee", "sopraorbitale", "pfl"],
    "prey": ["scleral", "vettore negativo", "uee", "decompressione"],
    "bloat": ["potassio", "sodio", "aldosterone", "ritenzione", "linfatico", "debloating"],
    "jawline": ["mandibola", "goniale", "bigoniale", "gonion", "ioide", "mento"],
    "acne": ["retinoidi", "tretinoina", "azelaico", "salicilico", "sebo", "barriera"],
    "calvizie": ["alopecia", "dht", "finasteride", "minoxidil", "norwood", "fue"]
};

let currentMainView = 'panoramica';
let currentCategoryFilter = 'all';
let currentApproachFilter = 'all';
let currentAtlasFilter = 'all';
let globalSearchQuery = '';
let savedFavorites = [];

const CATEGORY_COLORS = {
    "Osteologia & Struttura Ossea": "text-cyanClin bg-cyanClin/10 border-cyanClin/30",
    "Terzo Inferiore & Mandibola": "text-emeraldClin bg-emeraldClin/10 border-emeraldClin/30",
    "Area Oculare & Periorbitale": "text-purpleClin bg-purpleClin/10 border-purpleClin/30",
    "Morfologia Nasale, Labiale & Sorriso": "text-amberClin bg-amberClin/10 border-amberClin/30",
    "Dermatologia & Collagene": "text-cyanClin bg-cyanClin/10 border-cyanClin/30",
    "Colorimetria & Camouflage": "text-emeraldClin bg-emeraldClin/10 border-emeraldClin/30",
    "Tricologia & Architettura Capillare": "text-purpleClin bg-purpleClin/10 border-purpleClin/30",
    "Postura, Corpo & Allenamento Cervicale": "text-amberClin bg-amberClin/10 border-amberClin/30",
    "Fisiologia, Sonno & Endocrinologia": "text-cyanClin bg-cyanClin/10 border-cyanClin/30",
    "Voce, Olfatto & Tratti Secondari": "text-emeraldClin bg-emeraldClin/10 border-emeraldClin/30"
};

document.addEventListener('DOMContentLoaded', () => {
    loadFavoritesFromStorage();
    initCounters();
    renderCategorySidebar();
    renderHubDashboard();
    renderAllViews();
    setupKeyboardShortcuts();
    checkUrlHashOnLoad();

    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            globalSearchQuery = e.target.value.trim();
            updateClearButtonVisibility();
            if (globalSearchQuery && currentMainView === 'panoramica') {
                switchMainView('enciclopedia');
            } else {
                renderAllViews();
            }
        });
    }
});

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        const searchInput = document.getElementById('global-search');
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        if (e.key === 'Escape') {
            if (globalSearchQuery !== '') {
                resetFilters();
            }
            const sidebar = document.getElementById('app-sidebar');
            if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
                toggleMobileSidebar();
            }
        }
    });
}

function checkUrlHashOnLoad() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    if (['panoramica', 'enciclopedia', 'atlante', 'faq', 'protocolli', 'debunking', 'preferiti'].includes(hash)) {
        switchMainView(hash);
    } else {
        const master = getMasterEncyclopedia();
        const found = master.find(item => item.id === hash);
        if (found) {
            triggerQuickSearch(found.title);
        }
    }
}

function matchesQuery(textToSearch, rawQuery) {
    if (!rawQuery) return true;
    const cleanText = textToSearch.toLowerCase();
    const tokens = rawQuery.toLowerCase().split(/\s+/).filter(Boolean);

    return tokens.every(token => {
        if (cleanText.includes(token)) return true;
        for (const [slang, medicalTerms] of Object.entries(SEMANTIC_SYNONYMS)) {
            if (slang.includes(token) || token.includes(slang)) {
                if (medicalTerms.some(med => cleanText.includes(med))) return true;
            }
        }
        return false;
    });
}

function highlightText(text, rawQuery) {
    if (!rawQuery || !text) return text;
    const tokens = rawQuery.trim().split(/\s+/).filter(t => t.length >= 2);
    if (tokens.length === 0) return text;
    const escapedTokens = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedTokens.join('|')})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function triggerQuickSearch(term) {
    const searchInput = document.getElementById('global-search');
    globalSearchQuery = term;
    if (searchInput) searchInput.value = term;
    updateClearButtonVisibility();
    if (term && currentMainView === 'panoramica') {
        switchMainView('enciclopedia');
    } else {
        renderAllViews();
    }
}

function updateClearButtonVisibility() {
    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) {
        clearBtn.classList.toggle('hidden', globalSearchQuery.length === 0);
    }
}

// ============================================================================
// PREFERITI (LOCALSTORAGE)
// ============================================================================
function loadFavoritesFromStorage() {
    try {
        const stored = localStorage.getItem('morpho_codex_favorites');
        savedFavorites = stored ? JSON.parse(stored) : [];
    } catch (e) {
        savedFavorites = [];
    }
    updateFavoriteCounters();
}

function toggleFavorite(itemId) {
    const index = savedFavorites.indexOf(itemId);
    if (index === -1) savedFavorites.push(itemId);
    else savedFavorites.splice(index, 1);
    try {
        localStorage.setItem('morpho_codex_favorites', JSON.stringify(savedFavorites));
    } catch (e) {}
    updateFavoriteCounters();
    renderAllViews();
}

function clearAllFavorites() {
    savedFavorites = [];
    try { localStorage.removeItem('morpho_codex_favorites'); } catch (e) {}
    updateFavoriteCounters();
    renderAllViews();
}

function updateFavoriteCounters() {
    const countFavSidebar = document.getElementById('count-fav');
    const countFavHeader = document.getElementById('count-fav-header');
    if (countFavSidebar) countFavSidebar.innerText = savedFavorites.length;
    if (countFavHeader) countFavHeader.innerText = savedFavorites.length;
}

// ============================================================================
// CONTATORI, SIDEBAR E DASHBOARD PANORAMICA
// ============================================================================
function initCounters() {
    const master = getMasterEncyclopedia();
    const encCount = document.getElementById('count-enc');
    const atlCount = document.getElementById('count-atl');
    const faqCount = document.getElementById('count-faq');
    const protCount = document.getElementById('count-prot');
    const debCount = document.getElementById('count-deb');

    if (encCount) encCount.innerText = master.length;
    if (atlCount && typeof ATLAS_38_RATIOS !== 'undefined') atlCount.innerText = ATLAS_38_RATIOS.length;
    if (faqCount && typeof FAQ_DATABASE_COMPLETE !== 'undefined') faqCount.innerText = FAQ_DATABASE_COMPLETE.length;
    if (protCount && typeof PROTOCOLS_COMPLETE !== 'undefined') protCount.innerText = PROTOCOLS_COMPLETE.length;
    if (debCount && typeof DEBUNKING_COMPLETE !== 'undefined') debCount.innerText = DEBUNKING_COMPLETE.length;
    updateFavoriteCounters();
}

function renderHubDashboard() {
    const statsGrid = document.getElementById('hub-stats-grid');
    const catsGrid = document.getElementById('hub-categories-grid');
    const master = getMasterEncyclopedia();

    if (statsGrid) {
        const stats = [
            { label: "Monografie Cliniche", val: master.length, color: "text-cyanClin", view: "enciclopedia" },
            { label: "Angoli & Rapporti", val: (typeof ATLAS_38_RATIOS !== 'undefined' ? ATLAS_38_RATIOS.length : 38), color: "text-emeraldClin", view: "atlante" },
            { label: "Risposte Rapide FAQ", val: (typeof FAQ_DATABASE_COMPLETE !== 'undefined' ? FAQ_DATABASE_COMPLETE.length : 15), color: "text-amberClin", view: "faq" },
            { label: "Alert & Debunking", val: (typeof DEBUNKING_COMPLETE !== 'undefined' ? DEBUNKING_COMPLETE.length : 6), color: "text-roseClin", view: "debunking" }
        ];
        statsGrid.innerHTML = stats.map(s => `
            <div onclick="switchMainView('${s.view}')" class="cursor-pointer bg-bgPanel border border-borderDark hover:border-cyanClin/40 rounded-xl p-5 transition">
                <span class="font-mono text-3xl font-extrabold ${s.color}">${s.val}</span>
                <p class="text-xs font-mono uppercase text-gray-400 mt-1">${s.label} →</p>
            </div>
        `).join('');
    }

    if (catsGrid) {
        const categories = {};
        master.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = { count: 0, sample: item.title };
            }
            categories[item.category].count++;
        });

        catsGrid.innerHTML = Object.keys(categories).map(cat => {
            const badgeStyle = CATEGORY_COLORS[cat] || "text-cyanClin bg-cyanClin/10 border-cyanClin/30";
            return `
                <div onclick="selectCategory('${cat.replace(/'/g, "\\'")}')" class="cursor-pointer bg-bgPanel border border-borderDark hover:border-cyanClin/50 rounded-xl p-5 flex items-center justify-between transition group">
                    <div>
                        <span class="font-mono text-[11px] px-2 py-0.5 rounded border ${badgeStyle}">${categories[cat].count} Monografie</span>
                        <h3 class="text-base font-bold text-white mt-2 group-hover:text-cyanClin transition">${cat}</h3>
                        <p class="text-xs text-gray-500 mt-1 truncate max-w-md">Es: ${categories[cat].sample}</p>
                    </div>
                    <span class="font-mono text-gray-500 group-hover:text-cyanClin text-lg transition">→</span>
                </div>
            `;
        }).join('');
    }
}

function toggleMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('mobile-sidebar-backdrop');
    if (!sidebar || !backdrop) return;
    const isHidden = sidebar.classList.contains('-translate-x-full');
    sidebar.classList.toggle('-translate-x-full', !isHidden);
    backdrop.classList.toggle('hidden', !isHidden);
}

function switchMainView(viewName) {
    currentMainView = viewName;
    const views = ['panoramica', 'enciclopedia', 'atlante', 'faq', 'protocolli', 'debunking', 'preferiti'];

    views.forEach(v => {
        const section = document.getElementById(`view-${v}`);
        const navBtn = document.getElementById(`nav-${v}`);
        if (section) section.classList.toggle('hidden', v !== viewName);

        if (navBtn) {
            if (v === viewName) {
                if (v === 'debunking') {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold bg-roseClin/15 text-roseClin border border-roseClin/40 flex items-center justify-between transition";
                } else if (v === 'preferiti') {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold bg-amberClin/15 text-amberClin border border-amberClin/40 flex items-center justify-between transition";
                } else {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold bg-cyanClin/10 text-cyanClin border border-cyanClin/30 flex items-center justify-between transition";
                }
            } else {
                if (v === 'debunking') {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-roseClin/80 hover:bg-roseClin/10 hover:text-roseClin flex items-center justify-between transition";
                } else if (v === 'preferiti') {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-amberClin/80 hover:bg-amberClin/10 hover:text-amberClin flex items-center justify-between transition";
                } else {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-bgCard hover:text-white flex items-center justify-between transition";
                }
            }
        }
    });

    const sidebar = document.getElementById('app-sidebar');
    if (sidebar && !sidebar.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
        toggleMobileSidebar();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderAllViews();
}

function selectCategory(categoryName) {
    currentCategoryFilter = categoryName;
    if (currentMainView !== 'enciclopedia') {
        switchMainView('enciclopedia');
    } else {
        renderCategorySidebar();
        renderEncyclopedia();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function setApproachFilter(approach) {
    currentApproachFilter = approach;
    const btns = {
        'all': document.getElementById('btn-app-all'),
        'softmax': document.getElementById('btn-app-softmax'),
        'hardmax': document.getElementById('btn-app-hardmax')
    };
    Object.keys(btns).forEach(k => {
        if (!btns[k]) return;
        btns[k].className = k === approach
            ? "px-3 py-1 rounded-lg text-xs font-mono bg-cyanClin text-bgMain font-semibold transition"
            : "px-3 py-1 rounded-lg text-xs font-mono text-gray-400 hover:text-white transition";
    });
    renderEncyclopedia();
}

function renderCategorySidebar() {
    const container = document.getElementById('category-sidebar');
    if (!container) return;

    const master = getMasterEncyclopedia();
    const categories = {};
    master.forEach(item => {
        categories[item.category] = (categories[item.category] || 0) + 1;
    });

    let html = `
        <button onclick="selectCategory('all')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition ${currentCategoryFilter === 'all' ? 'bg-bgCard text-white border border-borderDark font-semibold' : 'text-gray-400 hover:bg-bgCard/50 hover:text-gray-200'}">
            <span>Tutti i 10 Distretti</span>
            <span class="text-cyanClin">${master.length}</span>
        </button>
    `;

    Object.keys(categories).forEach(cat => {
        const isActive = currentCategoryFilter === cat;
        html += `
            <button onclick="selectCategory('${cat.replace(/'/g, "\\'")}')" class="w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition ${isActive ? 'bg-bgCard text-cyanClin border border-cyanClin/30 font-semibold' : 'text-gray-400 hover:bg-bgCard/50 hover:text-gray-200'}">
                <span class="truncate pr-2">${cat}</span>
                <span class="font-mono text-[11px] text-gray-500">${categories[cat]}</span>
            </button>
        `;
    });

    container.innerHTML = html;
}

// ============================================================================
// BANNER DI RICERCA TRASVERSALE
// ============================================================================
function renderCrossSearchBanner() {
    const banner = document.getElementById('cross-search-banner');
    const termEl = document.getElementById('cross-search-term');
    const pillsEl = document.getElementById('cross-search-pills');
    const searchCountEl = document.getElementById('search-count');

    if (!banner || !termEl || !pillsEl) return;

    if (!globalSearchQuery) {
        banner.classList.add('hidden');
        if (searchCountEl) searchCountEl.innerText = '';
        return;
    }

    const master = getMasterEncyclopedia();
    const encMatches = master.filter(item => matchesQuery(`${item.title} ${item.subtitle} ${item.category} ${item.summary} ${item.details.join(' ')} ${item.solutions}`, globalSearchQuery)).length;
    const atlMatches = (typeof ATLAS_38_RATIOS !== 'undefined' ? ATLAS_38_RATIOS : []).filter(r => matchesQuery(`${r.name} ${r.ideal} ${r.level} ${r.desc}`, globalSearchQuery)).length;
    const faqMatches = (typeof FAQ_DATABASE_COMPLETE !== 'undefined' ? FAQ_DATABASE_COMPLETE : []).filter(f => matchesQuery(`${f.q} ${f.tag} ${f.a}`, globalSearchQuery)).length;
    const protMatches = (typeof PROTOCOLS_COMPLETE !== 'undefined' ? PROTOCOLS_COMPLETE : []).filter(p => matchesQuery(`${p.title} ${p.badge} ${p.desc} ${p.sections.map(s => s.subtitle + ' ' + s.items.join(' ')).join(' ')}`, globalSearchQuery)).length;
    const debMatches = (typeof DEBUNKING_COMPLETE !== 'undefined' ? DEBUNKING_COMPLETE : []).filter(d => matchesQuery(`${d.title} ${d.riskLevel} ${d.myth} ${d.reality}`, globalSearchQuery)).length;

    const totalMatches = encMatches + atlMatches + faqMatches + protMatches + debMatches;
    if (searchCountEl) searchCountEl.innerText = `${totalMatches} risultati`;

    banner.classList.remove('hidden');
    termEl.innerText = `"${globalSearchQuery}"`;

    pillsEl.innerHTML = `
        <button onclick="switchMainView('enciclopedia')" class="px-2.5 py-1 rounded-lg font-mono text-xs border transition ${currentMainView === 'enciclopedia' ? 'bg-cyanClin text-bgMain border-cyanClin font-bold' : 'bg-bgCard border-borderDark text-gray-300 hover:border-cyanClin'}">
            Enciclopedia (${encMatches})
        </button>
        <button onclick="switchMainView('atlante')" class="px-2.5 py-1 rounded-lg font-mono text-xs border transition ${currentMainView === 'atlante' ? 'bg-emeraldClin text-bgMain border-emeraldClin font-bold' : 'bg-bgCard border-borderDark text-gray-300 hover:border-emeraldClin'}">
            Atlante 38 Rapporti (${atlMatches})
        </button>
        <button onclick="switchMainView('faq')" class="px-2.5 py-1 rounded-lg font-mono text-xs border transition ${currentMainView === 'faq' ? 'bg-amberClin text-bgMain border-amberClin font-bold' : 'bg-bgCard border-borderDark text-gray-300 hover:border-amberClin'}">
            FAQ (${faqMatches})
        </button>
        <button onclick="switchMainView('protocolli')" class="px-2.5 py-1 rounded-lg font-mono text-xs border transition ${currentMainView === 'protocolli' ? 'bg-cyanClin text-bgMain border-cyanClin font-bold' : 'bg-bgCard border-borderDark text-gray-300 hover:border-cyanClin'}">
            Guide Pratiche (${protMatches})
        </button>
        <button onclick="switchMainView('debunking')" class="px-2.5 py-1 rounded-lg font-mono text-xs border transition ${currentMainView === 'debunking' ? 'bg-roseClin text-white border-roseClin font-bold' : 'bg-bgCard border-borderDark text-roseClin/80 hover:border-roseClin'}">
            Debunking (${debMatches})
        </button>
    `;
}

function renderAllViews() {
    initCounters();
    renderCrossSearchBanner();
    renderEncyclopedia();
    renderAtlas(currentAtlasFilter);
    renderFAQView();
    renderProtocolsView();
    renderDebunkingView();
    renderFavoritesView();
}

function buildEncyclopediaCardHTML(item) {
    const badgeStyle = CATEGORY_COLORS[item.category] || "text-cyanClin bg-cyanClin/10 border-cyanClin/30";
    const isFav = savedFavorites.includes(item.id);

    return `
        <article id="${item.id}" class="bg-bgPanel border border-borderDark rounded-2xl p-6 sm:p-7 hover:border-borderDark/90 transition shadow-lg">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="font-mono text-[11px] px-2.5 py-1 rounded border ${badgeStyle}">
                        ${highlightText(item.category, globalSearchQuery)}
                    </span>
                    <span class="font-mono text-xs px-2.5 py-1 rounded bg-bgCard border border-borderDark text-gray-300">
                        ${highlightText(item.badge, globalSearchQuery)}
                    </span>
                </div>
                <div class="flex items-center space-x-2 no-print">
                    <button onclick="copyCardLink('${item.id}')" class="px-2.5 py-1 rounded-lg bg-bgCard border border-borderDark hover:border-cyanClin/40 text-xs font-mono text-gray-400 hover:text-white transition">
                        <span id="copy-label-${item.id}">🔗 Link</span>
                    </button>
                    <button onclick="toggleFavorite('${item.id}')" class="px-2.5 py-1 rounded-lg border text-xs font-mono transition ${isFav ? 'bg-amberClin/15 border-amberClin/50 text-amberClin font-bold' : 'bg-bgCard border-borderDark text-gray-400 hover:text-amberClin'}">
                        ${isFav ? '★ Salvato' : '☆ Salva'}
                    </button>
                </div>
            </div>

            <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${highlightText(item.title, globalSearchQuery)}</h2>
            <p class="text-xs font-mono text-gray-400 mt-1 mb-4">${highlightText(item.subtitle, globalSearchQuery)}</p>

            <div class="p-4 rounded-xl bg-bgCard border border-borderDark/80 text-gray-200 text-sm leading-relaxed mb-5">
                ${highlightText(item.summary, globalSearchQuery)}
            </div>

            <div class="space-y-3 mb-6">
                <h3 class="font-mono text-xs uppercase tracking-wider text-gray-400">Analisi Anatomica & Meccanismi Biologici:</h3>
                <ul class="space-y-3">
                    ${item.details.map(point => {
                        const splitPoint = point.split(':');
                        const head = splitPoint[0];
                        const rest = splitPoint.slice(1).join(':');
                        return `
                            <li class="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                                <span class="w-1.5 h-1.5 rounded-full bg-cyanClin mt-2 shrink-0"></span>
                                <div>
                                    ${rest ? `<strong class="text-white font-semibold">${highlightText(head, globalSearchQuery)}:</strong>${highlightText(rest, globalSearchQuery)}` : highlightText(point, globalSearchQuery)}
                                </div>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>

            <div class="p-4 rounded-xl bg-emeraldClin/5 border border-emeraldClin/25 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                <span class="font-mono text-xs uppercase font-bold text-emeraldClin block mb-1">Strategie di Ottimizzazione & Opzioni Cliniche:</span>
                ${highlightText(item.solutions, globalSearchQuery)}
            </div>
        </article>
    `;
}

function renderEncyclopedia() {
    const grid = document.getElementById('encyclopedia-grid');
    const titleEl = document.getElementById('current-category-title');
    const tocLinks = document.getElementById('encyclopedia-toc-links');
    if (!grid) return;

    const master = getMasterEncyclopedia();
    if (titleEl) {
        titleEl.innerText = currentCategoryFilter === 'all' ? 'Tutti i Moduli Anatomici e Clinici' : currentCategoryFilter;
    }

    const filtered = master.filter(item => {
        const matchesCat = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
        const fullText = `${item.title} ${item.subtitle} ${item.category} ${item.summary} ${item.details.join(' ')} ${item.solutions}`;
        const matchesSearch = matchesQuery(fullText, globalSearchQuery);

        let matchesApproach = true;
        if (currentApproachFilter === 'hardmax') {
            matchesApproach = /chirurgi|osteotomi|le fort|bsso|impiant|rinoplastica|blefaroplastica|lip lift|trapianto|fue|filler|lipofilling|distrazione/i.test(fullText);
        } else if (currentApproachFilter === 'softmax') {
            matchesApproach = /protocollo|routine|postura|esercizi|dieta|sonno|topico|siero|shampoo|grooming|stubble|idratazione/i.test(fullText);
        }

        return matchesCat && matchesSearch && matchesApproach;
    });

    if (tocLinks) {
        tocLinks.innerHTML = filtered.map(item => `
            <a href="#${item.id}" class="px-2.5 py-1 rounded bg-bgCard border border-borderDark hover:border-cyanClin text-xs text-gray-300 hover:text-cyanClin transition truncate max-w-xs">
                ${item.title.split(':')[0]}
            </a>
        `).join('');
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="bg-bgPanel border border-borderDark rounded-xl p-8 text-center">
                <p class="text-gray-400 text-sm">Nessuna scheda trovata per "<span class="text-white font-mono">${globalSearchQuery}</span>" con i filtri attuali.</p>
                <button onclick="resetFilters()" class="mt-4 px-4 py-2 rounded-lg bg-cyanClin/10 border border-cyanClin/30 text-cyanClin text-xs font-mono hover:bg-cyanClin hover:text-bgMain transition">Mostra tutte le schede</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => buildEncyclopediaCardHTML(item)).join('');
}

function renderAtlas(levelFilter) {
    currentAtlasFilter = levelFilter || 'all';
    const tbody = document.getElementById('atlas-tbody');
    if (!tbody || typeof ATLAS_38_RATIOS === 'undefined') return;

    const levelBadges = {
        "Estremamente Importante": "bg-roseClin/10 text-roseClin border-roseClin/30",
        "Molto Importante": "bg-cyanClin/10 text-cyanClin border-cyanClin/30",
        "Importante": "bg-emeraldClin/10 text-emeraldClin border-emeraldClin/30"
    };

    const filtered = ATLAS_38_RATIOS.filter(r => {
        const matchesLevel = currentAtlasFilter === 'all' || r.level === currentAtlasFilter;
        const fullText = `${r.name} ${r.ideal} ${r.level} ${r.desc}`;
        const matchesSearch = matchesQuery(fullText, globalSearchQuery);
        return matchesLevel && matchesSearch;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="py-8 text-center text-gray-400 text-sm">Nessun parametro antropometrico trovato per "${globalSearchQuery}". <button onclick="resetFilters()" class="text-cyanClin underline ml-2 font-mono text-xs">Reset</button></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(r => `
        <tr class="hover:bg-bgHover transition">
            <td class="py-3.5 px-4 font-semibold text-white whitespace-nowrap">${highlightText(r.name, globalSearchQuery)}</td>
            <td class="py-3.5 px-4 font-mono text-cyanClin whitespace-nowrap font-medium">${highlightText(r.ideal, globalSearchQuery)}</td>
            <td class="py-3.5 px-4 whitespace-nowrap">
                <span class="px-2.5 py-0.5 rounded border font-mono text-[11px] ${levelBadges[r.level] || ''}">
                    ${r.level}
                </span>
            </td>
            <td class="py-3.5 px-4 text-gray-300 text-xs sm:text-sm leading-relaxed">${highlightText(r.desc, globalSearchQuery)}</td>
        </tr>
    `).join('');
}

function renderFAQView() {
    const container = document.getElementById('faq-list');
    if (!container || typeof FAQ_DATABASE_COMPLETE === 'undefined') return;

    const filtered = FAQ_DATABASE_COMPLETE.filter(f => matchesQuery(`${f.q} ${f.tag} ${f.a}`, globalSearchQuery));

    if (filtered.length === 0) {
        container.innerHTML = `<div class="bg-bgPanel border border-borderDark rounded-xl p-8 text-center text-gray-400 text-sm">Nessuna FAQ trovata per "${globalSearchQuery}".</div>`;
        return;
    }

    container.innerHTML = filtered.map((item, idx) => `
        <details class="faq-item group bg-bgPanel border border-borderDark rounded-xl overflow-hidden transition" ${idx < 3 || globalSearchQuery ? 'open' : ''}>
            <summary class="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-bgCard transition">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pr-4">
                    <span class="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amberClin/10 border border-amberClin/30 text-amberClin w-fit shrink-0">
                        ${highlightText(item.tag, globalSearchQuery)}
                    </span>
                    <span class="font-bold text-white text-base">${highlightText(item.q, globalSearchQuery)}</span>
                </div>
                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200 font-mono text-lg shrink-0">↓</span>
            </summary>
            <div class="px-5 pb-5 pt-3 text-sm text-gray-300 leading-relaxed border-t border-borderDark bg-bgCard/40">
                ${highlightText(item.a, globalSearchQuery)}
            </div>
        </details>
    `).join('');
}

function toggleAllFAQs(shouldOpen) {
    document.querySelectorAll('.faq-item').forEach(el => { el.open = shouldOpen; });
}

function renderProtocolsView() {
    const container = document.getElementById('protocols-list');
    if (!container || typeof PROTOCOLS_COMPLETE === 'undefined') return;

    const filtered = PROTOCOLS_COMPLETE.filter(p => {
        const secText = p.sections.map(s => `${s.subtitle} ${s.items.join(' ')}`).join(' ');
        return matchesQuery(`${p.title} ${p.badge} ${p.desc} ${secText}`, globalSearchQuery);
    });

    container.innerHTML = filtered.map(prot => {
        const isFav = savedFavorites.includes(prot.id);
        return `
            <div id="${prot.id}" class="bg-bgPanel border border-borderDark rounded-2xl p-6 sm:p-8">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="font-mono text-xs px-2.5 py-1 rounded bg-cyanClin/10 border border-cyanClin/30 text-cyanClin">
                        ${highlightText(prot.badge, globalSearchQuery)}
                    </span>
                    <button onclick="toggleFavorite('${prot.id}')" class="px-3 py-1 rounded-lg border text-xs font-mono transition ${isFav ? 'bg-amberClin/15 border-amberClin/50 text-amberClin font-bold' : 'bg-bgCard border-borderDark text-gray-400 hover:text-amberClin'}">
                        ${isFav ? '★ Protocollo Salvato' : '☆ Salva Protocollo'}
                    </button>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-white mt-3 mb-2">${highlightText(prot.title, globalSearchQuery)}</h3>
                <p class="text-gray-400 text-sm mb-6">${highlightText(prot.desc, globalSearchQuery)}</p>

                <div class="space-y-6">
                    ${prot.sections.map(sec => `
                        <div class="bg-bgCard border border-borderDark rounded-xl p-5">
                            <h4 class="font-mono text-xs uppercase tracking-wider text-emeraldClin font-bold mb-4 border-b border-borderDark pb-2">
                                ${highlightText(sec.subtitle, globalSearchQuery)}
                            </h4>
                            <ul class="space-y-3">
                                ${sec.items.map(it => {
                                    const parts = it.split('—');
                                    const head = parts[0];
                                    const body = parts.slice(1).join('—');
                                    return `
                                        <li class="text-sm text-gray-300 leading-relaxed flex items-start gap-2.5">
                                            <span class="text-cyanClin font-mono text-xs mt-0.5">▸</span>
                                            <div>
                                                ${body ? `<strong class="text-white font-semibold">${highlightText(head, globalSearchQuery)} —</strong>${highlightText(body, globalSearchQuery)}` : highlightText(it, globalSearchQuery)}
                                            </div>
                                        </li>
                                    `;
                                }).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function renderDebunkingView() {
    const container = document.getElementById('debunking-list');
    if (!container || typeof DEBUNKING_COMPLETE === 'undefined') return;

    const filtered = DEBUNKING_COMPLETE.filter(d => matchesQuery(`${d.title} ${d.riskLevel} ${d.myth} ${d.reality}`, globalSearchQuery));

    container.innerHTML = filtered.map(item => `
        <div class="bg-bgPanel border border-roseClin/30 rounded-2xl p-6 sm:p-7">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 class="text-lg sm:text-xl font-bold text-white">${highlightText(item.title, globalSearchQuery)}</h3>
                <span class="font-mono text-[11px] px-2.5 py-1 rounded bg-roseClin/15 border border-roseClin/40 text-roseClin font-semibold">
                    ${highlightText(item.riskLevel, globalSearchQuery)}
                </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="p-4 rounded-xl bg-bgCard border border-borderDark">
                    <span class="font-mono text-[11px] uppercase text-amberClin block mb-1 font-semibold">Il Falso Mito da Forum:</span>
                    <p class="text-xs sm:text-sm text-gray-400 leading-relaxed">${highlightText(item.myth, globalSearchQuery)}</p>
                </div>
                <div class="p-4 rounded-xl bg-roseClin/5 border border-roseClin/20">
                    <span class="font-mono text-[11px] uppercase text-roseClin block mb-1 font-semibold">Realtà Clinica & Rischi Anatomici:</span>
                    <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">${highlightText(item.reality, globalSearchQuery)}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFavoritesView() {
    const container = document.getElementById('favorites-grid');
    if (!container) return;

    const master = getMasterEncyclopedia();
    const favEncyclopedia = master.filter(item => savedFavorites.includes(item.id));
    const favProtocols = (typeof PROTOCOLS_COMPLETE !== 'undefined' ? PROTOCOLS_COMPLETE : []).filter(p => savedFavorites.includes(p.id));

    if (favEncyclopedia.length === 0 && favProtocols.length === 0) {
        container.innerHTML = `
            <div class="bg-bgPanel border border-borderDark rounded-2xl p-10 text-center">
                <span class="text-3xl text-amberClin block mb-3">☆</span>
                <h3 class="text-lg font-bold text-white mb-2">Il tuo Piano di Studio è vuoto</h3>
                <p class="text-gray-400 text-sm max-w-md mx-auto mb-6">
                    Clicca sul pulsante <span class="font-mono text-xs px-2 py-0.5 rounded bg-bgCard border border-borderDark text-amberClin">☆ Salva</span> in alto a destra su qualsiasi scheda anatomica o protocollo per raccogliere qui i tuoi argomenti prioritari.
                </p>
                <button onclick="switchMainView('enciclopedia')" class="px-5 py-2.5 rounded-xl bg-cyanClin text-bgMain font-semibold text-sm hover:bg-sky-300 transition">
                    Esplora l'Enciclopedia
                </button>
            </div>
        `;
        return;
    }

    let html = '';
    if (favEncyclopedia.length > 0) html += favEncyclopedia.map(item => buildEncyclopediaCardHTML(item)).join('');
    if (favProtocols.length > 0) {
        html += favProtocols.map(prot => `
            <div class="bg-bgPanel border border-amberClin/40 rounded-2xl p-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-mono text-xs text-amberClin">${prot.badge}</span>
                    <button onclick="toggleFavorite('${prot.id}')" class="text-xs font-mono text-roseClin hover:underline">Rimuovi dai salvati</button>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${prot.title}</h3>
                <p class="text-gray-400 text-sm mb-4">${prot.desc}</p>
                <button onclick="switchMainView('protocolli')" class="px-4 py-2 rounded-lg bg-cyanClin/10 border border-cyanClin/30 text-cyanClin text-xs font-mono">Vai al Protocollo Completo →</button>
            </div>
        `).join('');
    }
    container.innerHTML = html;
}

function copyCardLink(itemId) {
    const url = `${window.location.origin}${window.location.pathname}#${itemId}`;
    if (navigator.clipboard) navigator.clipboard.writeText(url);
    const label = document.getElementById(`copy-label-${itemId}`);
    if (label) {
        label.innerText = "✓ Copiato!";
        setTimeout(() => { label.innerText = "🔗 Link"; }, 2000);
    }
}

function resetFilters() {
    currentCategoryFilter = 'all';
    currentApproachFilter = 'all';
    currentAtlasFilter = 'all';
    globalSearchQuery = '';
    const searchInput = document.getElementById('global-search');
    if (searchInput) searchInput.value = '';
    updateClearButtonVisibility();
    setApproachFilter('all');
    renderCategorySidebar();
    renderAllViews();
}
