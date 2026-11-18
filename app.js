// ============================================================================
// APP.JS — MOTORE LOGICO, RICERCA GLOBALE E RENDERING UI (MORPHO CODEX)
// ============================================================================

// Unione dei 3 Database Enciclopedici in un unico Array Master
const MASTER_ENCYCLOPEDIA = [
    ...(typeof ENCYCLOPEDIA_PART_1 !== 'undefined' ? ENCYCLOPEDIA_PART_1 : []),
    ...(typeof ENCYCLOPEDIA_PART_2 !== 'undefined' ? ENCYCLOPEDIA_PART_2 : []),
    ...(typeof ENCYCLOPEDIA_PART_3 !== 'undefined' ? ENCYCLOPEDIA_PART_3 : [])
];

// Stato Globale dell'Applicazione
let currentMainView = 'enciclopedia';
let currentCategoryFilter = 'all';
let currentAtlasFilter = 'all';
let globalSearchQuery = '';

// Colori dinamici per i badge delle categorie
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

// ============================================================================
// 1. INIZIALIZZAZIONE E CONTATORI SIDEBAR
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    initCounters();
    renderCategorySidebar();
    renderAllViews();

    // Listener per la barra di ricerca globale in tempo reale
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            globalSearchQuery = e.target.value.trim().toLowerCase();
            renderAllViews();
        });
    }
});

function initCounters() {
    const encCount = document.getElementById('count-enc');
    const faqCount = document.getElementById('count-faq');
    const protCount = document.getElementById('count-prot');
    const debCount = document.getElementById('count-deb');

    if (encCount) encCount.innerText = MASTER_ENCYCLOPEDIA.length;
    if (faqCount && typeof FAQ_DATABASE_COMPLETE !== 'undefined') faqCount.innerText = FAQ_DATABASE_COMPLETE.length;
    if (protCount && typeof PROTOCOLS_COMPLETE !== 'undefined') protCount.innerText = PROTOCOLS_COMPLETE.length;
    if (debCount && typeof DEBUNKING_COMPLETE !== 'undefined') debCount.innerText = DEBUNKING_COMPLETE.length;
}

// ============================================================================
// 2. GESTIONE NAVIGAZIONE VISTE E CATEGORIE
// ============================================================================
function switchMainView(viewName) {
    currentMainView = viewName;
    const views = ['enciclopedia', 'atlante', 'faq', 'protocolli', 'debunking'];

    views.forEach(v => {
        const section = document.getElementById(`view-${v}`);
        const navBtn = document.getElementById(`nav-${v}`);

        if (section) {
            section.classList.toggle('hidden', v !== viewName);
        }

        if (navBtn) {
            if (v === viewName) {
                if (v === 'debunking') {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold bg-roseClin/15 text-roseClin border border-roseClin/40 flex items-center justify-between transition";
                } else {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold bg-cyanClin/10 text-cyanClin border border-cyanClin/30 flex items-center justify-between transition";
                }
            } else {
                if (v === 'debunking') {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-roseClin/80 hover:bg-roseClin/10 hover:text-roseClin flex items-center justify-between transition";
                } else {
                    navBtn.className = "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-bgCard hover:text-white flex items-center justify-between transition";
                }
            }
        }
    });

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

function renderCategorySidebar() {
    const container = document.getElementById('category-sidebar');
    if (!container) return;

    // Estrai categorie uniche e conta gli articoli per ciascuna
    const categories = {};
    MASTER_ENCYCLOPEDIA.forEach(item => {
        categories[item.category] = (categories[item.category] || 0) + 1;
    });

    let html = `
        <button onclick="selectCategory('all')" class="w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition ${currentCategoryFilter === 'all' ? 'bg-bgCard text-white border border-borderDark font-semibold' : 'text-gray-400 hover:bg-bgCard/50 hover:text-gray-200'}">
            <span>Tutti i Distretti</span>
            <span class="text-cyanClin">${MASTER_ENCYCLOPEDIA.length}</span>
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
// 3. FUNZIONI DI RENDERING PER LE 5 SEZIONI
// ============================================================================
function renderAllViews() {
    renderEncyclopedia();
    renderAtlas(currentAtlasFilter);
    renderFAQView();
    renderProtocolsView();
    renderDebunkingView();
}

// --- A. RENDERING ENCICLOPEDIA ANATOMICA ---
function renderEncyclopedia() {
    const grid = document.getElementById('encyclopedia-grid');
    const titleEl = document.getElementById('current-category-title');
    const searchCountEl = document.getElementById('search-count');
    if (!grid) return;

    if (titleEl) {
        titleEl.innerText = currentCategoryFilter === 'all' ? 'Tutti i Moduli Anatomici e Clinici' : currentCategoryFilter;
    }

    const filtered = MASTER_ENCYCLOPEDIA.filter(item => {
        const matchesCat = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
        const fullText = `${item.title} ${item.subtitle} ${item.category} ${item.summary} ${item.details.join(' ')} ${item.solutions}`.toLowerCase();
        const matchesSearch = !globalSearchQuery || fullText.includes(globalSearchQuery);
        return matchesCat && matchesSearch;
    });

    if (searchCountEl && currentMainView === 'enciclopedia') {
        searchCountEl.innerText = globalSearchQuery ? `${filtered.length} trovati` : '';
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="bg-bgPanel border border-borderDark rounded-xl p-8 text-center">
                <p class="text-gray-400 text-sm">Nessuna voce trovata per "<span class="text-white font-mono">${globalSearchQuery}</span>" in questa categoria.</p>
                <button onclick="resetFilters()" class="mt-4 px-4 py-2 rounded-lg bg-cyanClin/10 border border-cyanClin/30 text-cyanClin text-xs font-mono">Mostra tutte le voci</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const badgeStyle = CATEGORY_COLORS[item.category] || "text-cyanClin bg-cyanClin/10 border-cyanClin/30";
        return `
            <article class="bg-bgPanel border border-borderDark rounded-2xl p-6 sm:p-7 hover:border-borderDark/90 transition shadow-lg">
                <!-- Header Card -->
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="font-mono text-[11px] px-2.5 py-1 rounded border ${badgeStyle}">
                        ${item.category}
                    </span>
                    <span class="font-mono text-xs px-2.5 py-1 rounded bg-bgCard border border-borderDark text-gray-300">
                        ${item.badge}
                    </span>
                </div>

                <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${item.title}</h2>
                <p class="text-xs font-mono text-gray-400 mt-1 mb-4">${item.subtitle}</p>

                <!-- Sintesi Clinica -->
                <div class="p-4 rounded-xl bg-bgCard border border-borderDark/80 text-gray-200 text-sm leading-relaxed mb-5">
                    ${item.summary}
                </div>

                <!-- Approfondimento Anatomico Punti Chiave -->
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
                                        ${rest ? `<strong class="text-white font-semibold">${head}:</strong>${rest}` : point}
                                    </div>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>

                <!-- Box Soluzioni / Protocollo -->
                <div class="p-4 rounded-xl bg-emeraldClin/5 border border-emeraldClin/25 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    <span class="font-mono text-xs uppercase font-bold text-emeraldClin block mb-1">Strategie di Ottimizzazione & Opzioni Cliniche:</span>
                    ${item.solutions}
                </div>
            </article>
        `;
    }).join('');
}

// --- B. RENDERING ATLANTE DEI 38 RAPPORTI E ANGOLI ---
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
        const fullText = `${r.name} ${r.ideal} ${r.level} ${r.desc}`.toLowerCase();
        const matchesSearch = !globalSearchQuery || fullText.includes(globalSearchQuery);
        return matchesLevel && matchesSearch;
    });

    tbody.innerHTML = filtered.map(r => `
        <tr class="hover:bg-bgHover transition">
            <td class="py-3.5 px-4 font-semibold text-white whitespace-nowrap">${r.name}</td>
            <td class="py-3.5 px-4 font-mono text-cyanClin whitespace-nowrap font-medium">${r.ideal}</td>
            <td class="py-3.5 px-4 whitespace-nowrap">
                <span class="px-2.5 py-0.5 rounded border font-mono text-[11px] ${levelBadges[r.level] || ''}">
                    ${r.level}
                </span>
            </td>
            <td class="py-3.5 px-4 text-gray-300 text-xs sm:text-sm leading-relaxed">${r.desc}</td>
        </tr>
    `).join('');
}

// --- C. RENDERING PRONTO SOCCORSO (FAQ) ---
function renderFAQView() {
    const container = document.getElementById('faq-list');
    if (!container || typeof FAQ_DATABASE_COMPLETE === 'undefined') return;

    const filtered = FAQ_DATABASE_COMPLETE.filter(f => {
        const fullText = `${f.q} ${f.tag} ${f.a}`.toLowerCase();
        return !globalSearchQuery || fullText.includes(globalSearchQuery);
    });

    container.innerHTML = filtered.map((item, idx) => `
        <details class="group bg-bgPanel border border-borderDark rounded-xl overflow-hidden transition" ${idx < 2 || globalSearchQuery ? 'open' : ''}>
            <summary class="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-bgCard transition">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pr-4">
                    <span class="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amberClin/10 border border-amberClin/30 text-amberClin w-fit shrink-0">
                        ${item.tag}
                    </span>
                    <span class="font-bold text-white text-base">${item.q}</span>
                </div>
                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200 font-mono text-lg shrink-0">↓</span>
            </summary>
            <div class="px-5 pb-5 pt-3 text-sm text-gray-300 leading-relaxed border-t border-borderDark bg-bgCard/40">
                ${item.a}
            </div>
        </details>
    `).join('');
}

// --- D. RENDERING GUIDE E PROTOCOLLI PRATICI ---
function renderProtocolsView() {
    const container = document.getElementById('protocols-list');
    if (!container || typeof PROTOCOLS_COMPLETE === 'undefined') return;

    const filtered = PROTOCOLS_COMPLETE.filter(p => {
        const secText = p.sections.map(s => `${s.subtitle} ${s.items.join(' ')}`).join(' ');
        const fullText = `${p.title} ${p.badge} ${p.desc} ${secText}`.toLowerCase();
        return !globalSearchQuery || fullText.includes(globalSearchQuery);
    });

    container.innerHTML = filtered.map(prot => `
        <div class="bg-bgPanel border border-borderDark rounded-2xl p-6 sm:p-8">
            <span class="font-mono text-xs px-2.5 py-1 rounded bg-cyanClin/10 border border-cyanClin/30 text-cyanClin">
                ${prot.badge}
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-3 mb-2">${prot.title}</h3>
            <p class="text-gray-400 text-sm mb-6">${prot.desc}</p>

            <div class="space-y-6">
                ${prot.sections.map(sec => `
                    <div class="bg-bgCard border border-borderDark rounded-xl p-5">
                        <h4 class="font-mono text-xs uppercase tracking-wider text-emeraldClin font-bold mb-4 border-b border-borderDark pb-2">
                            ${sec.subtitle}
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
                                            ${body ? `<strong class="text-white font-semibold">${head} —</strong>${body}` : it}
                                        </div>
                                    </li>
                                `;
                            }).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// --- E. RENDERING DEBUNKING & ALERT MEDICI ---
function renderDebunkingView() {
    const container = document.getElementById('debunking-list');
    if (!container || typeof DEBUNKING_COMPLETE === 'undefined') return;

    const filtered = DEBUNKING_COMPLETE.filter(d => {
        const fullText = `${d.title} ${d.riskLevel} ${d.myth} ${d.reality}`.toLowerCase();
        return !globalSearchQuery || fullText.includes(globalSearchQuery);
    });

    container.innerHTML = filtered.map(item => `
        <div class="bg-bgPanel border border-roseClin/30 rounded-2xl p-6 sm:p-7">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 class="text-lg sm:text-xl font-bold text-white">${item.title}</h3>
                <span class="font-mono text-[11px] px-2.5 py-1 rounded bg-roseClin/15 border border-roseClin/40 text-roseClin font-semibold">
                    ${item.riskLevel}
                </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="p-4 rounded-xl bg-bgCard border border-borderDark">
                    <span class="font-mono text-[11px] uppercase text-amberClin block mb-1 font-semibold">Il Falso Mito da Forum:</span>
                    <p class="text-xs sm:text-sm text-gray-400 leading-relaxed">${item.myth}</p>
                </div>
                <div class="p-4 rounded-xl bg-roseClin/5 border border-roseClin/20">
                    <span class="font-mono text-[11px] uppercase text-roseClin block mb-1 font-semibold">Realtà Clinica & Rischi Anatomici:</span>
                    <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">${item.reality}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function resetFilters() {
    currentCategoryFilter = 'all';
    globalSearchQuery = '';
    const searchInput = document.getElementById('global-search');
    if (searchInput) searchInput.value = '';
    renderCategorySidebar();
    renderAllViews();
}
