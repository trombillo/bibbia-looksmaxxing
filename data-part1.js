// ============================================================================
// DATA PART 1: OSTEOLOGIA, TERZO INFERIORE, AREA OCULARE & ATLANTE 38 RAPPORTI
// ============================================================================

const ENCYCLOPEDIA_PART_1 = [
    // ------------------------------------------------------------------------
    // CATEGORIA 1: OSTEOLOGIA CRANIO-FACCIALE & MASCELLA (MAXILLA)
    // ------------------------------------------------------------------------
    {
        id: "osteo-01",
        category: "Osteologia & Struttura Ossea",
        title: "Anatomia della Mascella Superiore (Upper Maxilla) e Apertura Piriforme",
        subtitle: "Differenza tra Le Fort I, Le Fort II e proiezione paranasale",
        badge: "Fondamentale",
        summary: "La mascella superiore (area compresa tra la linea di frattura Le Fort II e Le Fort I) costituisce il pilastro architettonico del centro-faccia. Include i margini infraorbitali interni, il processo frontale del mascellare, la fossa canina e l'apertura piriforme (la cavità ossea nasale).",
        details: [
            "Proiezione dell'Apertura Nasale (Piriforme): Una mascella superiore ben proiettata in avanti presenta un contorno osseo che, visto dall'alto o di tre quarti, degrada dolcemente in avanti dagli zigomi verso il dorso del naso (Slanted Infraorbital-to-Nose Contour). Quando l'apertura piriforme è retrusa (piatta), si crea uno scalino netto tra la guancia e la base del naso, appiattendo il profilo medio-facciale[cite: 3].",
            "Differenza tra Naso Proiettato e Mascella Proiettata: Avere cartilagini nasali sporgenti su una mascella retrusa peggiora l'armonia del profilo (il naso appare sproporzionato e privo di supporto alla base)[cite: 3]. Al contrario, un'apertura piriforme avanzata sostiene la base alare e rende armonico anche un naso con proiezione cartilaginea moderata[cite: 3].",
            "Spina Nasale Anteriore (Anterior Nasal Spine - ANS): È la piccola sporgenza ossea situata alla base dell'apertura piriforme, proprio sopra gli incisivi centrali superiori. Una spina nasale anteriore lunga e ben sviluppata sostiene la columella, creando una transizione curva e concava tra la base del naso e il filtro labiale superiore (angolo naso-labiale ideale di 94°–117°). Una ANS retrusa causa un angolo acuto o un labbro superiore piatto[cite: 3].",
            "Fossa Canina (Canine Fossa): È la naturale depressione ossea situata sulla superficie anteriore della mascella, sotto il forame infraorbitale e sopra le radici dei denti canini, dove originano i muscoli elevatori dell'angolo della bocca. Una corretta profondità della fossa canina, unita a zigomi prominenti, crea il contrasto chiaroscurale essenziale per le guance scolpite[cite: 3]."
        ],
        solutions: "Correzioni Cliniche: Osteotomia Le Fort I (muove l'arcata dento-alveolare inferiore e la spina nasale), Osteotomia Le Fort II modificata o Impianti Paranasali / Pre-mascellari su misura (per avanzare selettivamente il contorno attorno all'apertura piriforme e alla fossa canina)[cite: 3]."
    },
    {
        id: "osteo-02",
        category: "Osteologia & Struttura Ossea",
        title: "Profondità Facciale (Facial Depth) e Rotazione Cranio-Facciale (CW vs CCW)",
        subtitle: "Relazione spaziale rispetto al Meato Acustico Esterno e al Piano di Francoforte",
        badge: "Cefalometria",
        summary: "La teoria della Profondità Facciale (Facial Depth) analizza lo sviluppo anteriore del volto rispetto a punti di riferimento cranici fissi e immutabili: il meato acustico esterno (condotto uditivo), il trago dell'orecchio e il posizionamento antero-posteriore del bulbo oculare[cite: 3].",
        details: [
            "Profondità Facciale Posteriore vs Anteriore: La profondità posteriore misura la distanza dal trago dell'orecchio al margine orbitale laterale/zigomo (influenzata dallo sviluppo della base cranica e correggibile solo con avanzamenti tipo Le Fort III o impianti malari)[cite: 3]. La profondità anteriore misura la proiezione del terzo medio centrale (nasion e mascella superiore) oltre il piano dell'occhio[cite: 3].",
            "Indice fDHR (Facial Depth-to-Height Ratio): Si calcola sul profilo laterale dividendo la profondità facciale (distanza dal punto subnasale al trago dell'orecchio) per l'altezza centro-facciale (distanza dal nasion al solco mentolabiale). Il valore estetico ideale si attesta intorno a 1.25 – 1.32, indicando un volto sviluppato in avanti anziché allungato verso il basso[cite: 3].",
            "Critica alla 'Mew Indicator Line' (MIL): La linea di Mew (dalla punta del naso al margine degli incisivi superiori) è un indicatore impreciso poiché è falsata dalle dimensioni della cartilagine nasale e misura solo la mandibola inferiore rispetto a quella superiore. Il 'Triangolo Mascellare' (Maxillary Triangle) e l'indice fDHR sono metriche cefalometriche nettamente superiori[cite: 3].",
            "Rotazione Oraria (CW) vs Antioraria (CCW): Durante la crescita, la mascella e la mandibola possono ruotare sul piano sagittale. Una rotazione antioraria (CCW - Counter-Clockwise Rotation, vista dal lato destro del paziente) solleva e proietta in avanti il mento e gli zigomi, riduce l'inclinazione del piano mandibolare (15°–22°) e compatta il terzo medio. Una rotazione oraria (CW) fa scivolare il mento indietro e in basso, allungando il volto[cite: 3]."
        ],
        solutions: "Opzioni Chirurgiche: Chirurgia Ortognatica Bimascellare (Bimax = Le Fort I + BSSO) con rotazione antioraria (CCW) del complesso maxillo-mandibolare per massimizzare la proiezione orizzontale[cite: 3]."
    },
    {
        id: "osteo-03",
        category: "Osteologia & Struttura Ossea",
        title: "Meccanica Masticatoria e Rimodellamento Osseo (Incisivi vs Molari)",
        subtitle: "Come la direzione delle forze occlusali influenza la rotazione mascellare e la compattezza orbitale",
        badge: "Meccanotrasduzione",
        summary: "La masticazione non serve solo a triturare il cibo, ma rappresenta il principale stimolo meccanico (meccanotrasduzione) per la crescita e il rimodellamento delle suture cranio-facciali tramite l'azione degli osteociti.",
        details: [
            "Masticazione con gli Incisivi (Vettore Anteriore-Superiore): Applicare una forza di carico elevata sui denti anteriori/incisivi (tramite cibi duri o attrezzi specifici) trasmette una forza vettoriale che spinge la porzione anteriore della mascella verso l'alto e in avanti, inducendo una salutare rotazione antioraria (CCW) e stimolando la proiezione della spina nasale e della fossa canina[cite: 3].",
            "Masticazione con i Molari Posteriori (Vettore Posteriore): Masticare prevalentemente sui molari posteriori esercita un fulcro che tende a far abbassare i settori posteriori, favorendo una rotazione oraria (CW), allungando il terzo inferiore e riducendo il supporto orbitale verticale[cite: 3].",
            "Forza Masticatoria e Densità Ossea: La forza occlusale umana può raggiungere picchi di 350–500 Newton. Questo stress meccanico ciclico stimola la deposizione di idrossiapatite e la densità corticale lungo le linee di forza (pilastro zigomatico-alveolare e pilastro fronto-nasale)."
        ],
        solutions: "Protocollo Funzionale: Integrare cibi ad alta resistenza meccanica nella dieta quotidiana, masticare in modo bilaterale simmetrico e utilizzare gomme da masticare ad alta resistenza (es. Mastic Gum / Falim) distribuendo il carico anche sui premolari e incisivi con moderazione per evitare sovraccarichi all'ATM[cite: 3]."
    },
    {
        id: "osteo-04",
        category: "Osteologia & Struttura Ossea",
        title: "Prominenza Malare, Zigomi e Curva Ogee (Ogee Curve)",
        subtitle: "Proiezione zigomatica laterale e anteriore nel sostegno dei tessuti molli",
        badge: "Terzo Medio",
        summary: "L'osso zigomatico (malar bone) si articola con l'osso frontale, sfenoide, temporale e mascellare. La sua conformazione determina la larghezza bizigomatica del volto, il supporto periorbitale e la celebre Curva Ogee.",
        details: [
            "Zigomi Alti (High-Set) vs Bassi (Low-Set): Gli zigomi si definiscono 'alti' quando il punto di massima sporgenza laterale e anteriore (eminenza malare) è situato subito sotto il canto laterale dell'occhio, coprendo oltre l'81–100% dell'altezza rispetto alla base nasale[cite: 7]. Questo protegge il bulbo oculare e solleva i cuscinetti adiposi della guancia[cite: 2, 7].",
            "Proiezione Laterale vs Anteriore: La proiezione anteriore sostiene la palpebra inferiore (vettore orbitale positivo) e riduce le pieghe nasolabiali[cite: 2, 7]. La proiezione laterale dell'arcata zigomatica definisce la larghezza bizigomatica vista frontalmente e crea il contrasto d'ombra con la zona sub-zigomatica[cite: 7].",
            "La Curva Ogee (Ogee Curve): Termine mutuato dall'architettura che descrive una doppia curva sinuosa a 'S' osservabile nella vista di tre quarti (45°): inizia con una convessità piena all'altezza dello zigomo e scende in una dolce concavità sotto-malare (guancia), per poi raccordarsi armoniosamente con la convessità dell'angolo mandibolare e del mento[cite: 7].",
            "Impianti Malari vs Submalari: In chirurgia estetica, gli impianti 'submalari' (pensati per il ringiovanimento di pazienti anziani) aggiungono volume troppo in basso, appesantendo il viso[cite: 2, 7]. Negli individui giovani, il design corretto prevede impianti strettamente 'malari' posizionati in alto con enfasi sulla proiezione laterale e infraorbitale[cite: 2, 7]."
        ],
        solutions: "Opzioni Cliniche: Riduzione della massa grassa al 10–12% per svelare l'osso[cite: 7], filler di acido ialuronico ad alto G-prime o idrossiapatite di calcio sull'arco zigomatico, lipofilling (fat grafting) o impianti malari/infraorbitali customizzati in PEEK o titanio/silicone[cite: 2, 7]."
    },
    {
        id: "osteo-05",
        category: "Osteologia & Struttura Ossea",
        title: "Asimmetrie Cranio-Facciali, Osso Sfenoide e Articolazione Temporo-Mandibolare (ATM)",
        subtitle: "Cause biomeccaniche, muscolari e posturali delle asimmetrie del volto",
        badge: "Biomeccanica",
        summary: "Un lieve grado di asimmetria facciale è fisiologico in ogni essere umano, ma asimmetrie marcate (inclinazione del piano occlusale, un occhio più basso, deviazione del mento) derivano spesso da squilibri muscolari, disfunzioni dell'ATM o deficit posturali cronici[cite: 3].",
        details: [
            "Il Ruolo Chiave dell'Osso Sfenoide: Lo sfenoide è la 'pietra angolare' della base cranica poiché si articola con quasi tutte le altre ossa del cranio (frontale, temporali, occipitale, zigomatici, mascellare)[cite: 3]. Tensioni asimmetriche dei muscoli masticatori (in particolare i muscoli pterigoidei, che si inseriscono sui processi pterigoidei dello sfenoide) possono riflettersi sull'equilibrio dell'intero volto[cite: 3].",
            "Disfunzione Temporo-Mandibolare (TMJ / ATM): Masticare prevalentemente da un solo lato o soffrire di bruxismo causa un'ipertrofia asimmetrica del muscolo massetere e temporale sul lato dominante, accompagnata da click articolari, usura condilare e deviazione del mento verso il lato più corto[cite: 3].",
            "Catene Cinetiche e Postura Corporea: Dormire sempre sullo stesso fianco o mantenere un'inclinazione laterale cronica del collo e delle spalle (scoliosi funzionale o bacino ruotato) induce tensioni compensative nei muscoli sternocleidomastoidei e sub-occipitali, alterando la percezione di simmetria facciale[cite: 3]."
        ],
        solutions: "Protocollo Conservativo: Rieducazione alla masticazione bilaterale, rilascio miofasciale sub-occipitale e temporale, utilizzo di bite gnatologici su misura in caso di bruxismo/TMJ, correzione della postura cervicale e abitudine a dormire supini[cite: 3]."
    },

    // ------------------------------------------------------------------------
    // CATEGORIA 2: TERZO INFERIORE, MANDIBOLA, MENTO E OSSO IOIDE
    // ------------------------------------------------------------------------
    {
        id: "lower-01",
        category: "Terzo Inferiore & Mandibola",
        title: "Morfologia Mandibolare: Angolo Goniale, Ramo e Larghezza Bigoniale",
        subtitle: "Anatomia scheletrica e muscolare del complesso mandibolare",
        badge: "Priorità Critica",
        summary: "Il terzo inferiore (dalla base del naso al punto più basso del mento) è il principale indicatore di dimorfismo sessuale maschile insieme all'arcata sopraccigliare. La sua solidità dipende dall'interazione tra osso mandibolare e muscoli masticatori[cite: 3, 7, 8].",
        details: [
            "Parametri Ideali dell'Angolo Mandibolare: Nella letteratura estetica, il profilo mandibolare ottimale presenta un angolo goniale di circa 115°–130°, una pendenza del ramo ascendente di 65°–75° rispetto al piano orizzontale di Francoforte e una posizione verticale del gonion (vista frontalmente) allineata alla commessura labiale o non più bassa del labbro inferiore[cite: 7].",
            "Inclinazione Frontale della Mandibola (Jaw Frontal Angle): Osservando il viso di fronte, la linea che scende dal gonion al mento dovrebbe essere quasi parallela (con una deviazione massima di 15°) a una linea immaginaria tracciata dal canto laterale dell'occhio alla base alare del naso[cite: 7].",
            "Ipoplasia Mandibolare Posteriore e Gonion Invertiti: Una mandibola che appare stretta e arrotondata frontalmente è spesso causata da gonion inclinati verso l'interno (inverted gonions) o da un ramo mandibolare inclinato medialmente[cite: 7]. L'eversione goniale (outward flare) conferisce invece l'aspetto squadrato e definito[cite: 7].",
            "Meccanotrasduzione e Muscolo Massetere: Il muscolo massetere si inserisce sulla faccia esterna dell'angolo mandibolare. L'allenamento masticatorio controllato (cibi fibrosi, gomma di lentisco/mastic gum) induce ipertrofia del massetere aumentando la larghezza bigoniale di 3–6 mm per lato; tuttavia, l'eccesso va evitato per non gonfiare eccessivamente le guance o infiammare l'ATM[cite: 3, 7]."
        ],
        solutions: "Opzioni Chirurgiche (Hardmaxxing): BSSO (Bilateral Sagittal Split Osteotomy per avanzare l'intera mandibola), Chin Wing / Side Wing Osteotomy (osteotomia del bordo inferiore mandibolare per allargare e ridefinire gli angoli ossei), Impianti Goniali su misura in PEEK/Titanio o Filler mandibolari (questi ultimi soggetti però a migrazione nel lungo termine)[cite: 3, 7]."
    },
    {
        id: "lower-02",
        category: "Terzo Inferiore & Mandibola",
        title: "Proiezione del Mento (Pogonion), Muscolo Mentale e Solco Mentolabiale",
        subtitle: "Equilibrio antero-posteriore (Angoli SNA/SNB) e anatomia dei tessuti molli del mento",
        badge: "Profilometria",
        summary: "Il mento rappresenta il punto terminale anteriore e inferiore del viso. Una deviazione anche di pochi millimetri rispetto al piano ideale altera profondamente la percezione dell'intero profilo, inclusa la grandezza percepita del naso[cite: 3, 7].",
        details: [
            "Profilo Ortognatico vs Retrognatico (SNA e SNB): L'angolo SNA (Sella-Nasion-Punto A mascellare, ideale 80°–84°) e l'angolo SNB (Sella-Nasion-Punto B mandibolare, ideale 78°–82°) definiscono la posizione delle mascelle rispetto alla base cranica[cite: 3]. In un profilo ortognatico ideale, il pogonion (punto più anteriore del mento) si allinea verticalmente con la glabella o con il labbro inferiore[cite: 3].",
            "Illusione Ottica Naso-Mento: Un mento retruso (retrognazia/microgenia) fa apparire qualsiasi naso molto più grande e sporgente (spesso portando i pazienti a richiedere erroneamente una rinoplastica quando il vero deficit è mandibolare)[cite: 3]. Al contrario, una forte proiezione del mento e della glabella bilancia perfettamente anche un naso importante[cite: 3].",
            "Inserzione del Muscolo Mentale (Mentalis Muscle): Il muscolo mentale solleva il tessuto del mento e il labbro inferiore[cite: 7]. Un'inserzione alta (subito sotto il vermiglio inferiore) e compatta mantiene il mento affilato. Un muscolo mentale ipertrofico, contratto (spesso per forzare la chiusura delle labbra in chi ha incompetenza labiale) o con inserzione bassa conferisce un aspetto spugnoso e arrotondato[cite: 7].",
            "Il Solco Mentolabiale (Mentolabial Fold): È la piega orizzontale tra il labbro inferiore e il mento (angolo ideale 108°–130°)[cite: 7]. Un solco eccessivamente profondo spezza l'armonia del terzo inferiore; per questo motivo, negli avanzamenti chirurgici importanti si preferisce la 'Chin Shield Genioplasty' rispetto alla genioplastica standard per non scavare ulteriormente il solco[cite: 3, 7]."
        ],
        solutions: "Correzioni Cliniche: Genioplastica di scorrimento osseo (Sliding Genioplasty, ideale per avanzamenti >7–8mm e modifiche verticali), Impianti Mentonieri anatomici o 'Pre-Jowl' (utili se serve anche allargare orizzontalmente un mento stretto), oppure filler/tossina botulinica nel muscolo mentale iperattivo[cite: 3, 7]."
    },
    {
        id: "lower-03",
        category: "Terzo Inferiore & Mandibola",
        title: "Biomeccanica dell'Osso Ioide e Definizione Sottomentoniera",
        subtitle: "Come la posizione ioidea determina la nettezza della linea mandibolare",
        badge: "Fisiologia & Esercizi",
        summary: "L'osso ioide è l'unico osso dello scheletro umano non articolato direttamente con altre ossa: è sospeso nel collo tramite muscoli e legamenti (muscoli sopra-ioidei e sotto-ioidei) tra la base della lingua e la cartilagine tiroidea[cite: 7, 8].",
        details: [
            "Impatto Visivo della Posizione Ioidea: Anche a parità di bassa percentuale di grasso corporeo, un soggetto con osso ioide posizionato in basso (Tipo II o III) presenterà una pelle sottomentoniera obliqua che cade verso il pomo d'Adamo, simulando un doppio mento e cancellando l'ombra netta sotto la mandibola. Un osso ioide alto e arretrato (Tipo I) crea un angolo cervico-mentoniero stretto (~90°–105°) e una linea mandibolare tagliente[cite: 7, 8].",
            "Connessione con la Radice della Lingua: Il muscolo genioglosso e il muscolo mioioideo collegano la lingua e la mandibola interna all'osso ioide[cite: 7, 8]. Quando il terzo posteriore (radice) della lingua viene sollevato contro il palato (pronunciando il suono '-NG'), si osserva un'immediata risalita visibile della pelle sotto il mento[cite: 2, 7, 8].",
            "Studio Clinico di Tokyo (High-Speed Jaw-Opening Exercise): Uno studio pubblicato su *Clinical Interventions in Aging* (Matsubara et al., 2018) ha dimostrato che l'allenamento specifico delle fibre muscolari a contrazione rapida (fast-twitch) dei muscoli sopra-ioidei (in particolare il mioioideo) tramite aperture mandibolari massime e rapide eleva significativamente la posizione a riposo dell'osso ioide (da 70.7 mm a 66.2 mm rispetto al piano di Camper) in sole 4 settimane[cite: 7]."
        ],
        solutions: "Protocollo Esercizi Sopra-Ioidei: 1) High-Speed Jaw Opening: Aprire la bocca al massimo il più velocemente possibile una volta ogni 2 secondi per 20 ripetizioni (3 serie con 10s di pausa, 2 volte al giorno), fermandosi in caso di fastidio all'ATM[cite: 7]. 2) Swallowing Hold & Stretch: Deglutire mantenendo la lingua sul palato, trattenere la fase di picco della deglutizione (quando il pomo d'Adamo e lo ioide salgono) e inclinare leggermente il mento verso l'alto per 5 secondi per 10 ripetizioni[cite: 7, 8]."
    },

    // ------------------------------------------------------------------------
    // CATEGORIA 3: ESTETICA PERIORBITALE, OCULOPLASTICA, SOPRACCIGLIA E CIGLIA
    // ------------------------------------------------------------------------
    {
        id: "eye-01",
        category: "Area Oculare & Periorbitale",
        title: "Morfologia Periorbitale: Differenze Dimorfiche e Struttura Ossea",
        subtitle: "Dimensione apparente, profondità dell'orbita e inclinazione cantale",
        badge: "Priorità Critica",
        summary: "La regione periorbitale è il primo punto focale nell'interazione visiva umana. Le differenze tra uno sguardo magnetico e uno sguardo stanco o sporgente risiedono quasi interamente nella gabbia ossea orbitale che circonda il bulbo oculare[cite: 2].",
        details: [
            "Dimensione Apparente e Protezione Ossea: Gli occhi maschili appaiono mediamente più compatti verticalmente e più incassati rispetto a quelli femminili perché gli uomini presentano arcate sopraccigliari più sporgenti, ponti nasali più alti e zigomi più strutturati[cite: 2]. Quando zigomi e radice nasale sono alti, i canti mediale e laterale e la palpebra inferiore si posizionano più in alto, riducendo l'esposizione della sclera[cite: 2].",
            "Classificazione dell'Esoftalmometria (Hertel): La sporgenza del bulbo oculare rispetto al margine orbitale laterale si misura con l'esoftalmometro di Hertel[cite: 2]. I valori negli adulti si dividono in: Occhi Incassati / Deep-Set (<14 mm, ideali per il dimorfismo maschile), Normali (15–17 mm), Moderatamente Sporgenti (18–20 mm) e Molto Sporgenti (>20 mm)[cite: 2].",
            "Canthal Tilt Maschile vs Femminile: Sebbene un'inclinazione cantale positiva (PCT) sia estetica in entrambi i sessi, la geometria cambia[cite: 2]. Nella donna il PCT è spesso generato da una palpebra inferiore curva e da un canto esterno che sale verso le tempie[cite: 2]. Nell'uomo, il PCT ideale (4°–6°) nasce da un canto mediale lungo e ben inclinato verso il basso (down-swung medial canthus) unito a un margine palpebrale inferiore dritto e angolare[cite: 2].",
            "Il Ruolo Muscolare dell'Orbicularis Oculi: Oltre alle ossa, il tono del muscolo orbicolare dell'occhio (in particolare la porzione pretarsale inferiore) sostiene attivamente la palpebra inferiore[cite: 2]. La paralisi di questo muscolo (es. da tossina botulinica) aumenta l'apertura verticale (PFH) fino al 30%, causando ectropion o scleral show[cite: 2]. Una leggerissima contrazione tonica ('squinching' naturale alla luce solare) solleva e raddrizza la palpebra inferiore[cite: 1, 2]."
        ],
        solutions: "Opzioni Chirurgiche Oculoplastiche: Decompressione Orbitale (rimozione o assottigliamento controllato della parete orbitale laterale/mediale per far arretrare un bulbo oculare troppo sporgente), Impianti del Margine Infraorbitale e Malare (per correggere il vettore negativo), Retrazione della Palpebra Inferiore / Canthoplasty (da valutare con estrema cautela solo presso chirurghi oculoplastici d'élite per evitare un aspetto artificiale o asimmetrico)[cite: 2]."
    },
    {
        id: "eye-02",
        category: "Area Oculare & Periorbitale",
        title: "Gestione dell'Upper Eyelid Exposure (UEE) e Supporto Infraorbitale",
        subtitle: "Trattamenti conservativi e chirurgici per palpebra superiore e occhiaie",
        badge: "Oculoplastica",
        summary: "Un'eccessiva esposizione della palpebra superiore mobile (sunken upper eyelid) o uno svuotamento sotto l'occhio (tear trough) conferiscono un aspetto affaticato e invecchiato anche in giovane età[cite: 2].",
        details: [
            "Cause dell'Upper Eyelid Exposure (UEE): L'esposizione della piega palpebrale superiore dipende da due soli fattori: la proiezione anteriore del margine osseo sopraorbitale (sotto il sopracciglio) e il volume/percorso di discesa del cuscinetto adiposo sopraorbitale (ROOF)[cite: 2]. Con l'invecchiamento o per genetica, questo grasso si atrofizza scoprendo la palpebra[cite: 2].",
            "Filler e Lipofilling Palpebrale Superiore: L'iniezione micro-cannulare di acido ialuronico specifico o grasso autologo (fat grafting) nel solco superiore riempie lo spazio sotto il margine sopraorbitale, creando un effetto 'hooded' (palpebra coperta e compatta) naturale[cite: 2]. A causa della ridotta mobilità metabolica di quell'area, i filler nella palpebra superiore durano mediamente 2–3 anni[cite: 2].",
            "Blefaroplastica Inferiore e Solco Lacrimale: Le borse sotto gli occhi sono causate dall'erniazione del grasso orbitale inferiore, mentre le occhiaie scavate derivano da ipoplasia infraorbitale[cite: 2]. Una blefaroplastica transcongiuntivale con riposizionamento del grasso (fat repositioning) o l'abbinamento a lipofilling/impianti infraorbitali leviga la transizione tra palpebra e guancia[cite: 2]."
        ],
        solutions: "Protocollo Topico Periorbitale: Mattina → crioterapia locale delicata (vasocostrizione e drenaggio dell'edema) + Siero alla Caffeina 5% ed EGCG (vasocostrittore sui capillari dilatati)[cite: 2]. Sera → Crema contorno occhi con Squalano, Ceramidi, Peptidi (Matrixyl) e Vitamina C/Acido Cogico per ridurre l'iperpigmentazione melanica[cite: 2, 4]."
    },
    {
        id: "eye-03",
        category: "Area Oculare & Periorbitale",
        title: "Anatomia dell'Iride, Psicologia del Colore Oculare e Salute della Sclera",
        subtitle: "Struttura stromale, studi sulla percezione sociale e limpidezza sclerale",
        badge: "Oftalmologia",
        summary: "Il colore e la brillantezza dell'occhio non dipendono solo dalla genetica dell'iride, ma soprattutto dal contrasto con una sclera perfettamente bianca e dall'integrità dell'anello limbico[cite: 1, 2].",
        details: [
            "I 3 Strati dell'Iride: 1) Strato Limitante Anteriore (definisce la trama e i cripte dell'iride); 2) Stroma (lo strato intermedio che contiene i melanociti con Eumelanina bruno-nera e Feomelanina giallo-rossa: un'alta densità di eumelanina nello stroma genera occhi marroni, mentre l'assenza di pigmento stromale produce occhi azzurri per diffusione ottica di Tyndall/Rayleigh); 3) Epitelio Pigmentato Posteriore (IPE, fondo scuro che assorbe la luce)[cite: 2].",
            "Studi sulla Percezione (Occhi Marroni vs Azzurri): Ricerche antropologiche (Kleisner et al.) hanno dimostrato che i volti con occhi marroni vengono spesso percepiti come più dominanti e affidabili non per il colore dell'iride in sé, ma per la morfologia facciale geneticamente correlata (menti più ampi, bocche più larghe, sopracciglia più spesse e ravvicinate)[cite: 1, 2]. Gli occhi chiari aumentano invece il contrasto cromatico ('striking factor'), specialmente se abbinati a ciglia e sopracciglia scure[cite: 1, 2].",
            "Tecnologia Laser di Depigmentazione (Stroma / Nd:YAG): Esistono brevetti oftalmici basati su laser Nd:YAG a 532nm con profilo di fascio Gaussiano che colpiscono selettivamente i melanosomi dello stroma anteriore (diviso in due zone concentriche attorno alla pupilla) attivando la rimozione macrofagica del pigmento per rivelare il fondo chiaro sottostante[cite: 2]. Tali procedure restano tuttavia sperimentali e presentano rischi di glaucoma pigmentario o instabilità a lungo termine[cite: 2].",
            "Salute e Bianchezza della Sclera: Una sclera ingiallita, arrossata o opaca (causata da privazione di sonno, fumo, secchezza oculare, depositi di melanina da raggi UV o stress epatico/bilirubina) riduce drasticamente l'attrattività dello sguardo[cite: 1, 2]."
        ],
        solutions: "Protocollo Sclera Limpida: 7.5–9 ore di sonno notturno, protezione UV con occhiali da sole all'aperto, idratazione con lacrime artificiali prive di conservanti (ialuronato di sodio), integrazione antiossidante (Vitamina C + Glutatione liposomiale) e uso esclusivamente occasionale (per eventi) di colliri a base di Brimonidina tartrato 0.025% (es. Lumify, che agisce selettivamente sulle venule senza causare l'effetto rimbalzo dei vecchi decongestionanti)[cite: 1, 2]."
    },
    {
        id: "eye-04",
        category: "Area Oculare & Periorbitale",
        title: "Architettura di Sopracciglia e Ciglia: Morfologia e Ciclo di Crescita",
        subtitle: "Geometria sopraccigliare maschile e fisiologia del follicolo pilifero (Fase Anagen)",
        badge: "Alto ROI Estetico",
        summary: "Sopracciglia e ciglia incorniciano l'occhio, proteggono il bulbo e modificano radicalmente la percezione dei rapporti orbitali (riducono visivamente la UEE, aumentano la PFL percepita e migliorano il contrasto cromatico)[cite: 2].",
        details: [
            "Parametri Ideali delle Sopracciglia Maschili: 1) Forma: dritta e orizzontale (mai arcuata o arrotondata al centro); 2) Posizione (Set): bassa, vicina alla rima palpebrale; 3) Lunghezza Interna: deve iniziare in linea con l'ala del naso o leggermente più internamente verso la glabella; 4) Lunghezza Esterna: deve estendersi oltre il canto laterale dell'occhio; 5) Inclinazione (Tilt): neutra o leggermente positiva (5°–10°), rilassando il muscolo frontale per evitare di sollevare la testa interna del sopracciglio; 6) Colore e Densità: folte e di 1 tono più scure rispetto ai capelli (se biondi o chiari)[cite: 2].",
            "Benefici delle Ciglia Lunghe e Scure nell'Uomo: Ciglia superiori e inferiori folte e scure creano un'ombra naturale che nasconde l'esposizione della palpebra superiore (UEE), allungano visivamente l'angolo esterno dell'occhio (PFL) e fanno risaltare il colore dell'iride[cite: 2].",
            "Fisiologia della Crescita (Wnt/β-catenina e PGE2): Il ciclo vitale di ciglia e sopracciglia si divide in Anagen (crescita attiva legata all'apporto vascolare della papilla dermica), Catagen (transizione) e Telogen (riposo)[cite: 2]. Per aumentare lunghezza e densità occorre prolungare la fase Anagen attivando la via di segnalazione Wnt/β-catenina e i recettori delle prostaglandine PGE2[cite: 2]."
        ],
        solutions: "Protocollo Sicuro Sopracciglia & Ciglia: 1) Sopracciglia: Minoxidil topico 5% applicato con cotton-fioc solo sull'arco sopraccigliare + Microneedling leggero (0.5mm 1 volta a settimana) + tintura specifica (beard/brow dye) per scurire i peli vellus chiari; pulizia con pinzetta solo al centro (glabella) e sui peli isolati superiori[cite: 2]. 2) Ciglia: Sieri a base di Peptidi di Rame (GHK-Cu) e Myristoyl Pentapeptide-17, Olio di Ricino puro (acido ricinoleico sui recettori EP3/EP4), oppure tintura per ciglia e piegaciglia termico delicato[cite: 2]."
    }
];

// ============================================================================
// ATLANTE COMPLETO DEI 38 RAPPORTI E ANGOLI ANTROPOMETRICI (Dal Doc 11)
// ============================================================================
const ATLAS_38_RATIOS = [
    // --- PRIORITÀ CRITICA (RED) ---
    { name: "1. Angolo Goniale (Gonial Angle)", ideal: "112° – 123° (fino a 128°)", level: "Estremamente Importante", desc: "Angolo misurato di profilo con vertice al gonion e bracci lungo il corpo mandibolare inferiore e il ramo posteriore. Determina la nettezza e l'inclinazione della mascella inferiore." },
    { name: "2. Terzi Facciali (Facial Thirds)", ideal: "29.5% – 36.5% (~1/3 cad.)", level: "Estremamente Importante", desc: "Suddivisione verticale del volto (Trichion-Glabella, Glabella-Subnasale, Subnasale-Menton). L'equilibrio tra i tre segmenti è alla base dell'armonia cranio-facciale." },
    { name: "3. ESR (Eye Separation Ratio)", ideal: "0.443 – 0.474 (44.3–47.4%)", level: "Estremamente Importante", desc: "Distanza interpupillare (IPD) divisa per la larghezza bizigomatica totale. Più accurato del metodo empirico del 'terzo occhio' per valutare la spaziatura oculare." },
    { name: "4. Angolo di Convessità Facciale Totale", ideal: "137.5° – 148.5°", level: "Estremamente Importante", desc: "Angolo misurato di profilo tra Glabella, Punta del Naso (Pronasale) e Pogonion (Mento). Valuta l'equilibrio globale del profilo includendo la proiezione nasale." },
    { name: "5. Angolo di Convessità Facciale (Senza Naso)", ideal: "168° – 176°", level: "Estremamente Importante", desc: "Angolo tra Glabella, Punto Subnasale e Pogonion. Indica se il profilo scheletrico è ortognatico (dritto/armonico), retrognatico (<165°) o prognatico (>178°)." },
    { name: "6. Posizione Verticale degli Zigomi", ideal: "81% – 100%", level: "Estremamente Importante", desc: "Altezza del punto di massima prominenza malare rispetto alla distanza tra base nasale e occhio. Valori >81% definiscono gli zigomi alti (High-Set Cheekbones)." },
    { name: "7. Angolo Frontale della Mandibola (Jaw Frontal)", ideal: "84.5° – 95.0°", level: "Estremamente Importante", desc: "Inclinazione frontale dei bordi inferiori della mandibola convergenti verso il mento. Definisce la squadratura del terzo inferiore vista di fronte." },
    { name: "8. Angolo del Piano Mandibolare (MPA)", ideal: "15° – 22°", level: "Estremamente Importante", desc: "Inclinazione del bordo inferiore della mandibola rispetto al piano orizzontale di Francoforte. Valori bassi indicano buona crescita orizzontale (CCW)." },
    { name: "9. Inclinazione Cantale (Canthal Tilt)", ideal: "+5.2° – +8.5° (Maschile 4°–6°)", level: "Estremamente Importante", desc: "Angolo dell'asse palpebrale tra il canto mediale interno e il canto laterale esterno rispetto al piano orizzontale." },
    { name: "10. Rapporto Ramo / Corpo Mandibolare", ideal: "0.59 – 0.78", level: "Estremamente Importante", desc: "Altezza verticale del ramo mandibolare ascendente divisa per la lunghezza del corpo mandibolare. Un ramo lungo garantisce supporto posteriore al terzo inferiore." },
    { name: "11. fWHR (Facial Width-to-Height Ratio)", ideal: "1.90 – 2.06 (min 1.80+)", level: "Estremamente Importante", desc: "Larghezza bizigomatica divisa per l'altezza tra il centro delle sopracciglia e il margine superiore del labbro superiore. Indice primario di compattezza dimorfica." },
    { name: "12. Total fWHR (Altezza/Larghezza Totale)", ideal: "1.33 – 1.38", level: "Estremamente Importante", desc: "Altezza totale del viso (dalla fronte/attaccatura al mento) divisa per la larghezza bizigomatica. Indica un viso ben proporzionato né troppo tondo né allungato." },
    { name: "13. Angolo Cervico-Mentoniero (Submental)", ideal: "91° – 110° (max 120°)", level: "Estremamente Importante", desc: "Angolo formato tra il piano inferiore del mento, l'osso ioide e la linea anteriore del collo. Essenziale per la definizione del profilo mandibolare." },
    { name: "14. Rapporto Mentoniero / Filtro (Chin-to-Philtrum)", ideal: "2.05 – 2.55 (media modelli 2.60)", level: "Estremamente Importante", desc: "Altezza del mento (stomion-menton) divisa per l'altezza del filtro (subnasale-stomion). Un filtro corto con mento solido ringiovanisce e mascolinizza il viso." },
    { name: "15. Eye Aspect Ratio (PFL / PFH)", ideal: "2.80 – 3.60 (ottimale 3.0–3.5)", level: "Estremamente Importante", desc: "Larghezza orizzontale della fessura palpebrale (PFL) divisa per la sua apertura verticale (PFH). Determina la forma compatta e allungata dell'occhio." },
    { name: "16. Midface Ratio (Indice Terzo Medio)", ideal: "0.93 – 1.05 (ottimale ~1.0)", level: "Estremamente Importante", desc: "Distanza interpupillare (IPD) divisa per la distanza verticale tra nasion e labbro superiore. Valuta la compattezza centrale del volto." },
    { name: "17. Recessione rispetto al Piano di Francoforte", ideal: "Nessuna (Allineato/Avanzato)", level: "Estremamente Importante", desc: "Posizione della glabella, subnasale e pogonion rispetto alla verticale abbassata dal piano auricolo-orbitale di Francoforte." },
    { name: "18. Larghezza Bigoniale (vs Bizigomatica)", ideal: "85.5% – 92% (Ratio inv. ~1.15–1.30)", level: "Estremamente Importante", desc: "Distanza tra i due gonion mandibolari in percentuale rispetto alla larghezza degli zigomi. Determina la larghezza frontale della mascella." },
    { name: "19. Vettore Orbitale (Orbital Vector)", ideal: "Positivo", level: "Estremamente Importante", desc: "Posizione anteriore dello zigomo/margine infraorbitale rispetto all'apice corneale. Fondamentale per il supporto della palpebra inferiore." },

    // --- PRIORITÀ ALTA (BLUE) ---
    { name: "20. Angolo Naso-Frontale (Nasofrontal)", ideal: "106° – 129°", level: "Molto Importante", desc: "Angolo formato all'incavo glabellare (nasion) tra l'inclinazione della fronte/arcata sopraccigliare e il dorso del naso (Infraglabellar Notch)." },
    { name: "21. Spaziatura Oculare (Eye Spacing)", ideal: "0.93 – 1.04", level: "Molto Importante", desc: "Distanza intercantale interna (tra i due canti mediali) divisa per la larghezza orizzontale di un singolo occhio (PFL)." },
    { name: "22. Rapporto Labbro Inferiore / Superiore", ideal: "1.40 – 2.00 (Sezione Aurea 1.62)", level: "Molto Importante", desc: "Altezza verticale del vermiglio inferiore divisa per l'altezza del vermiglio superiore. Garantisce proporzione ed equilibrio alla rima orale." },
    { name: "23. Angolo Naso-Facciale (Nasofacial)", ideal: "30° – 36°", level: "Molto Importante", desc: "Angolo di sporgenza del dorso nasale rispetto al piano verticale anteriore del viso (linea glabella-pogonion)." },
    { name: "24. Posizione Verticale delle Sopracciglia", ideal: "0.0 – 0.65 (Low-Set)", level: "Molto Importante", desc: "Distanza tra il margine inferiore del sopracciglio e il centro della pupilla rapportata all'altezza dell'occhio. Più è bassa, più lo sguardo è intenso." },
    { name: "25. Angolo Naso-Labiale (Nasolabial)", ideal: "94° – 117°", level: "Molto Importante", desc: "Angolo tra la columella (base del naso) e il filtro del labbro superiore. Indica la corretta inclinazione della punta nasale e il supporto della spina nasale." },
    { name: "26. Proiezione Nasale (Metodo di Goode)", ideal: "0.55 – 0.68", level: "Molto Importante", desc: "Proiezione orizzontale della punta del naso dal solco alare divisa per la lunghezza dorsale dal nasion alla punta." },
    { name: "27. Rapporto Larghezza / Altezza Nasale", ideal: "0.62 – 0.88", level: "Molto Importante", desc: "Larghezza interalare del naso divisa per la lunghezza verticale del naso (nasion-subnasale)." },
    { name: "28. Rapporto Larghezza Bocca / Naso", ideal: "1.38 – 1.62 (ottimale ~1.55)", level: "Molto Importante", desc: "Larghezza della bocca da commessura a commessura divisa per la larghezza della base alare del naso (o ~1/5 della larghezza bizigomatica per il naso)." },
    { name: "29. Larghezza del Collo (Neck Width)", ideal: "90% – 100% della Bigoniale", level: "Molto Importante", desc: "Larghezza frontale del collo rispetto alla larghezza degli angoli mandibolari. Essenziale per il dimorfismo maschile." },
    { name: "30. Angolo EME (Eye-Mouth-Eye)", ideal: "47° – 50°", level: "Molto Importante", desc: "Angolo formato unendo il centro delle labbra (stomion) al centro delle due pupille. Correla spaziatura oculare e lunghezza centro-facciale." },
    { name: "31. Lower / Full Face Ratio", ideal: "0.62 – 0.65", level: "Molto Importante", desc: "Altezza dal nasion al mento divisa per l'altezza totale del viso (dalla hairline al mento). Maggiore nei profili maschili maturi." },
    { name: "32. fDHR (Facial Depth-to-Height Ratio)", ideal: "1.20 – 1.33 (ottimale 1.25)", level: "Molto Importante", desc: "Profondità laterale (subnasale-trago) divisa per l'altezza centro-facciale (nasion-solco mentolabiale). Misura lo sviluppo orizzontale in avanti." },

    // --- PRIORITÀ COMPLEMENTARE (GREEN) ---
    { name: "33. Angolo Cantale Mediale", ideal: "20° – 42°", level: "Importante", desc: "Angolo formato tra il margine superiore e inferiore della palpebra nell'angolo interno dell'occhio (canto mediale). Più è acuto e definito, più è dimorfico." },
    { name: "34. Angolo Naso-Mentale (Nasomental)", ideal: "125° – 132°", level: "Importante", desc: "Angolo tra la linea del dorso nasale e la linea che unisce la punta del naso al pogonion (mento)." },
    { name: "35. Angolo della Punta Nasale (Nasal Tip)", ideal: "112° – 125°", level: "Importante", desc: "Angolo di definizione e rotazione della punta cartilaginea del naso visto di profilo." },
    { name: "36. Relazione Gonion - Bocca", ideal: "Gonion allineato o sotto la bocca", level: "Importante", desc: "Posizione verticale dell'angolo mandibolare rispetto alla linea della rima orale in vista frontale e laterale." },
    { name: "37. Angolo Mentolabiale (Mentolabial)", ideal: "108° – 130°", level: "Importante", desc: "Angolo di concavità della piega tra il labbro inferiore e il mento osseo. Non deve essere né troppo piatto né eccessivamente scavato." },
    { name: "38. Larghezza Bitemporale & Inclinazione Fronte", ideal: "84%–95% Bizygo | 13°–24°", level: "Importante", desc: "Larghezza della fronte tra le tempie rispetto agli zigomi (incorniciata dai 'temple peaks' dei capelli) e inclinazione dell'arcata sopraccigliare." }
];
