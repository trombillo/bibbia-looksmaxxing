// ============================================================================
// DATA PART 3: TRICOLOGIA, POSTURA, CORPO, SONNO, ORMONI, VOCE, FAQ & DEBUNKING
// ============================================================================

// --- 1. DATI FAQ (PRONTO SOCCORSO ESTETICO) ---
const FAQ_DATABASE_COMPLETE = [
    {
        q: "Come distinguere l'esposizione della palpebra superiore (UEE) dalla ptosi palpebrale medica?",
        tag: "Area Oculare",
        a: "L'Upper Eyelid Exposure (UEE) riguarda lo spazio visibile tra le ciglia superiori e il solco sotto il sopracciglio: il margine della palpebra si apre normalmente senza coprire la pupilla, ma manca il cuscinetto adiposo sopraorbitale o la sporgenza dell'arcata ossea che copre la piega. La Ptosi Palpebrale, invece, è una disfunzione del muscolo elevatore della palpebra superiore (o del muscolo di Müller): il bordo stesso della palpebra cade verso il basso coprendo parte dell'iride superiore e della pupilla, conferendo uno sguardo assonnato e asimmetrico. La UEE si gestisce con posizione sopraccigliare, ciglia folte o micro-lipofilling/filler del solco superiore; la ptosi richiede una valutazione oculoplastica sul muscolo elevatore[cite: 2]."
    },
    {
        q: "Cos'è il vettore orbitale negativo e come influisce su occhiaie e borse sotto gli occhi?",
        tag: "Area Oculare",
        a: "Osservando il volto esattamente di profilo, traccia una linea verticale immaginaria che scende dall'apice della cornea (punto più anteriore del bulbo oculare) verso la guancia. Se lo zigomo e il margine infraorbitale si trovano più avanti della cornea, hai un Vettore Positivo (ottimo supporto). Se invece lo zigomo è arretrato rispetto alla cornea, hai un Vettore Negativo: mancando la 'mensola' ossea sottostante, i tessuti molli e il cuscinetto orbitale inferiore scivolano verso il basso, creando un solco lacrimale scavato (tear trough), borse precoci ed esposizione della sclera inferiore (scleral show)[cite: 2]."
    },
    {
        q: "Come capire se un viso pieno o tondo dipende dal grasso corporeo o dalla ritenzione idrica (bloating)?",
        tag: "Debloating & Corpo",
        a: "Fai il test della variazione oraria e della plica: la ritenzione idrica extracellulare (edema/bloating) cambia visibilmente tra il mattino appena svegli (viso più gonfio) e la sera, oppure peggiora 12–24 ore dopo un pasto ricco di sale, alcol o carboidrati raffinati[cite: 1, 7]. Il grasso sottocutaneo e il cuscinetto adiposo di Bichat, invece, rimangono costanti ogni giorno e si riducono solo scendendo intorno al 10%–12% di massa grassa corporea tramite deficit calorico[cite: 7]. Se sei già al 10–12% di grasso corporeo, hai l'addome scolpito e segui un protocollo a basso sodio / alto potassio ma il viso resta tondo, la causa è una struttura ossea zigomatica/mandibolare poco sporgente o un'ipertrofia dei muscoli buccinatori[cite: 3, 7]."
    },
    {
        q: "È possibile modificare la larghezza percepita degli occhi (IPD) senza interventi invasivi?",
        tag: "Armonia & Grooming",
        a: "La distanza interpupillare ossea (IPD) è fissa nell'adulto, ma l'illusione ottica della spaziatura oculare dipende fortemente dalle sopracciglia e dalla radice nasale (nasion)[cite: 2, 3]. Se gli occhi appaiono troppo ravvicinati (basso ESR), distanziare leggermente la testa interna delle sopracciglia e far crescere o definire la coda esterna oltre il canto dell'occhio allarga visivamente lo sguardo[cite: 2]. Al contrario, se gli occhi appaiono troppo distanti, avvicinare l'inizio delle sopracciglia verso la glabella riduce la percezione di spazio vuoto[cite: 2, 3]."
    },
    {
        q: "Perché i muscoli buccinatori ipertrofici ostacolano l'effetto delle guance scavate (Hollow Cheeks)?",
        tag: "Miofunzionale",
        a: "Il muscolo buccinatore forma la parete laterale della guancia[cite: 7]. Se durante la masticazione o la deglutizione si utilizzano le guance per spingere il cibo e la saliva (schema di deglutizione infantile o atipica), il buccinatore si ipertrofizza aggiungendo volume muscolare proprio nella zona sub-zigomatica[cite: 7]. Apprendere la deglutizione adulta corretta ('Mona Lisa swallow'), in cui solo la lingua spinge contro il palato a labbra chiuse senza muovere i muscoli facciali, favorisce il rilassamento e il ridimensionamento fisiologico dei buccinatori[cite: 2, 3, 7]."
    },
    {
        q: "Perché pratiche come il 'Bonesmashing' o l'uso di idrocortisone sul naso sono clinicamente pericolose?",
        tag: "Debunking & Sicurezza",
        a: "Il 'bonesmashing' (colpire le ossa facciali con oggetti duri) fraintende la Legge di Wolff: l'osso risponde a carichi meccanici ciclici fisiologici (come la trazione muscolare o la masticazione), mentre i traumi contusivi diretti dall'esterno causano microfratture disorganizzate, ematomi subperiostali fibrotici, calli ossei deformi/asimmetrici, lesioni ai rami del nervo trigemino e del nervo facciale (parestesie o paralisi) e traumi cranici (CTE)[cite: 3, 7, 9]. Allo stesso modo, applicare creme all'idrocortisone sul naso per assottigliarlo sfrutta un grave effetto collaterale dei corticosteroidi: l'atrofia irreversibile del derma, con rischio di teleangectasie (capillari rotti) e dermatite periorale da rimbalzo[cite: 1]."
    }
];

// --- 2. DATI DEBUNKING & ALERT MEDICI ---
const DEBUNKING_COMPLETE = [
    {
        title: "1. Bonesmashing (Traumi Contusivi con Martelli, Nocche o Pistole Massaggianti)",
        riskLevel: "PERICOLO ESTREMO • Danni Irreversibili",
        myth: "Il falso mito sostiene che colpire ripetutamente zigomi, arcata sopraccigliare o mento crei microfratture che, secondo la Legge di Wolff, farebbero crescere l'osso più grande e sporgente.",
        reality: "La Legge di Wolff descrive l'adattamento trabecolare e corticale delle ossa sottoposte a carichi meccanici tensivi/compressivi fisiologici e ciclici (come la trazione muscolare o la masticazione), NON ai traumi contusivi diretti dall'esterno. Colpire il periostio facciale provoca: 1) Ematomi subperiostali che si organizzano in tessuto cicatriziale fibrotico e calli ossei deformi/asimmetrici; 2) Lesioni permanenti ai rami del nervo trigemino e del nervo facciale (parestesie o paralisi); 3) Fratture della sottile parete orbitale o del seno mascellare, distacco di retina per onda d'urto e traumi cranici (CTE). Il gonfiore visibile nelle foto 'prima/dopo' sui forum è puro edema infiammatorio ed ematoma[cite: 3, 7, 9]."
    },
    {
        title: "2. Waterpulling (Aspirazione Fai-da-Te sulle Guance con Siringhe)",
        riskLevel: "PERICOLO ESTREMO • Rischio Infezioni Gravi",
        myth: "Un thread virale affermava che fosse possibile ottenere le 'guance scavate' in 2 minuti inserendo un ago da insulina nella guancia e aspirando 0.2–0.3 ml di 'acqua semi-cristallizzata e grasso'.",
        reality: "Anatomicamente e fisicamente assurdo: il grasso sottocutaneo e il cuscinetto di Bichat sono tessuti solidi lobulari vascolarizzati che non possono passare attraverso il microscopico calibro (30G–31G) di un ago da insulina, né esiste 'acqua libera' aspirabile nel derma. L'autore stesso del thread originale ha successivamente ammesso che si trattava di uno scherzo ('troll post'). Chiunque tenti questa pratica rischia di perforare il dotto parotideo (dotto di Stenone), lesionare l'arteria facciale o i rami buccali del nervo facciale e introdurre batteri cutanei in profondità causando cellulite facciale necrotizzante o trombosi del seno cavernoso."
    },
    {
        title: "3. Uso Cronico di Idrocortisone Topico (1%–1.5%) per Restringere il Naso",
        riskLevel: "ALTO RISCHIO DERMATOLOGICO • Atrofia Cutanea",
        myth: "Applicare creme al cortisone sulla punta del naso ogni giorno per settimane per 'sgonfiare e assottigliare la cartilagine nasale' simulando una rinoplastica.",
        reality: "L'idrocortisone è un corticosteroide topico. L'assottigliamento temporaneo che si nota nei primi giorni è dovuto alla vasocostrizione e alla disidratazione locale; tuttavia, l'uso prolungato sulla pelle sana inibisce la sintesi di collagene ed elastina causando **Atrofia Cutanea Irreversibile** (la pelle diventa sottile come carta velina), comparsa permanente di capillari dilatati (teleangectasie), dermatite steroidea/rosacea indotta, sindrome da astinenza da steroidi topici (TSW con grave gonfiore e rossore di rimbalzo alla sospensione) e possibile assorbimento sistemico sull'asse HPA[cite: 1]."
    },
    {
        title: "4. Analoghi delle Prostaglandine (Bimatoprost / Latisse) sulle Ciglia e Rischio PAP",
        riskLevel: "RISCHIO ESTETICO ELEVATO • Svuotamento Orbitale",
        myth: "Applicare quotidianamente colliri per il glaucoma (Bimatoprost, Latanoprost) lungo le palpebre per ottenere ciglia lunghissime senza conseguenze sulla zona oculare.",
        reality: "Sebbene il Bimatoprost allunghi efficacemente le ciglia, gli studi oftalmologici hanno documentato la **Periorbitopatia Associata a Prostaglandine (PAP)**: le prostaglandine inibiscono l'adipogenesi (la formazione e il mantenimento delle cellule adipose) nel tessuto periorbitale. L'uso continuativo provoca l'atrofia del grasso sopraorbitale e infraorbitale, causando un infossamento patologico del solco palpebrale superiore (peggiorando drasticamente la UEE), occhiaie scure da iperpigmentazione perioculare e scurimento permanente dell'iride nei soggetti con occhi nocciola/verdi[cite: 2]."
    },
    {
        title: "5. Abuso di Diuretici dell'Ansa (Furosemide / Lasix) e Megadosaggi di Ormoni/Peptidi",
        riskLevel: "PERICOLO DI VITA • Emergenza Medica",
        myth: "Assumere farmaci diuretici ospedalieri (Lasix) per asciugare il viso prima di un evento, oppure iniettarsi cocktail fai-da-te di HGH ad alte dosi, Insulina, Inibitori dell'Aromatasi (Letrozolo) e FANS (Flurbiprofene) per 'crescere in altezza a piastre chiuse'.",
        reality: "La Furosemide (Lasix) usata in soggetti sani causa ipokaliemia acuta (crollo del potassio cardiaco), disidratazione grave, insufficienza renale e aritmie fatali[cite: 2, 7]. Allo stesso modo, una volta che le cartilagini di coniugazione (growth plates) sono ossificate nell'adulto, NESSUN dosaggio di HGH o IGF-1 può allungare le ossa lunghe: il sovradosaggio di GH a piastre chiuse provoca esclusivamente **Acromegalia** (crescita patologica di organi interni, cartilagini nasali/auricolari, spaziatura dentale, insulino-resistenza/diabete e cardiomegalia), mentre l'abbattimento degli estrogeni con Letrozolo distrugge la densità minerale ossea (osteoporosi precoce), le articolazioni e la funzione neuro-cognitiva."
    },
    {
        title: "6. Dispositivi Artigianali di Trazione Cranica ('Facepuller' con Collari, Cinture e Pesi da 20kg)",
        riskLevel: "ALTO RISCHIO ORTODONTICO E CERVICALE",
        myth: "Costruire apparecchi in resina fai-da-te o mordere cinture/asciugamani tirando verso l'alto ('Face Rowing') o appendere pesi da 15–20 kg alla fronte per 'spostare la mascella e ruotare lo sfenoide'.",
        reality: "Negli studi clinici o animali citati sui forum, le forze ortopediche vengono applicate direttamente all'osso mascellare tramite ancoraggi scheletrici chirurgici controllati al millimetro[cite: 3]. Tirare un'impronta artigianale o mordere una cintura scarica forze vettoriali incontrollate sui denti e sul legamento parodontale, causando **avulsione dentale, riassorbimento delle radici, necrosi pulpare, lussazione dell'articolazione temporo-mandibolare (ATM) ed ernie discali cervicali**[cite: 3]."
    }
];

// --- 3. DATI GUIDE PRATICHE (PROTOCOLLI) ---
const PROTOCOLS_COMPLETE = [
    {
        id: "prot-debloat",
        badge: "Manuale Integrale • 41 Punti",
        title: "Il Protocollo Definitivo di Debloating Facciale e Sistemico",
        desc: "Tutte le strategie fisiologiche, elettrolitiche, linfatiche e digestive per eliminare la ritenzione idrica extracellulare dal volto e massimizzare la definizione ossea[cite: 1, 2, 7].",
        sections: [
            {
                subtitle: "Fase 1: Equilibrio Elettrolitico, Acqua e Ormoni Idro-Regolatori",
                items: [
                    "1. Rapporto Potassio : Sodio di 4:1 — Il sodio è il principale elettrolita extracellulare, mentre il potassio è intracellulare. Mantieni il sodio intorno a 1.000–1.500 mg/die ed eleva il potassio a 4.000+ mg/die tramite patate al forno/bollite, avocado, spinaci cotti, banane, acqua di cocco, salmone e kiwi[cite: 1, 2, 7].",
                    "2. Idratazione Costante e Soppressione dell'Aldosterone — Quando sei disidratato, i reni trattengono acqua e sodio causando un viso gonfio. Bevi 3.5 – 4.0 litri di acqua pura al giorno, distribuita in piccoli sorsi costanti[cite: 1, 2, 7].",
                    "3. Controllo dei Picchi Glicemici e dell'Insulina — I carboidrati raffinati causano picchi d'insulina che riducono l'escrezione renale di sodio, legando l'acqua nei tessuti[cite: 1, 7].",
                    "4. Eliminazione dell'Alcol — L'alcol provoca un violento rimbalzo di aldosterone e vasodilatazione capillare facciale nelle 24–48 ore successive[cite: 7].",
                    "5. Modulazione di Cortisolo e Tiroide — Il cortisolo alto trattiene acqua sul viso; controlla lo stress con magnesio e ashwagandha[cite: 1, 7]."
                ]
            },
            {
                subtitle: "Fase 2: Drenaggio Linfatico, Meccanica Facciale e Diuretici Naturali",
                items: [
                    "6. Elevazione della Testa nel Sonno — Dormire con la testa inclinata di 10°–15° sopra il livello del cuore previene l'accumulo di liquidi periorbitali notturni[cite: 6, 10].",
                    "7. Massaggio Linfatico Manuale, Gua Sha e Crioterapia — Applicare freddo e massaggiare con pietra Gua Sha dal centro del viso verso il basso lungo i linfonodi cervicali verso le clavicole[cite: 1, 7].",
                    "8. Attivazione della Pompa Linfatica — Eseguire 5 minuti di saltelli (rebounding/Maasai jumps) o 30 minuti di aerobica per stimolare il flusso linfatico[cite: 7].",
                    "9. Diuretici Fitoterapici Naturali — Infuso di radice e foglie di Tarassaco (Dandelion Tea) che agisce preservando il potassio[cite: 1, 2, 7].",
                    "10. Atrofia dei Buccinatori — Evitare di succhiare cibi o liquidi per non ipertrofizzare i muscoli delle guance[cite: 7]."
                ]
            },
            {
                subtitle: "Fase 3: Debloating Gastro-Intestinale",
                items: [
                    "11. Esclusione dei Cibi FODMAP Fermentabili — Ridurre alimenti che producono gas intestinale e infiammazione sistemica (Proteina C-Reattiva)[cite: 7].",
                    "12. Regola dell'80% e Passeggiata Post-Prandiale — Fermarsi all'80% della sazietà e camminare per 10–15 minuti dopo i pasti principali per accelerare lo svuotamento gastrico[cite: 7]."
                ]
            }
        ]
    },
    {
        id: "prot-skincare",
        badge: "Manuale Operativo • Dermatologia",
        title: "Routine Cliniche di Skincare per Ogni Tipo di Pelle (Mattina & Sera)",
        desc: "Protocolli strutturati passo dopo passo per massimizzare il collagene, eliminare imperfezioni e proteggere la barriera cutanea[cite: 4].",
        sections: [
            {
                subtitle: "Protocollo A: Pelle Normale / Mista (Focus Anti-Aging e Luminosità)",
                items: [
                    "MATTINA — Step 1: Risciacquo con acqua fresca o detergente delicato in gel; Step 2: Siero alla Vitamina C 15–20% + Vitamina E + Acido Ferulico; Step 3: Crema idratante leggera; Step 4: Protezione Solare SPF 50+ PA++++[cite: 1, 4].",
                    "SERA — Step 1: Doppia Detersione (Olio detergente seguito da gel a pH 5.0); Step 2 (3–5 sere a settimana): Tretinoina 0.025%–0.05% o Retinolo 0.5%–1%; Step 2 Alternativo (nelle sere senza retinoide): Acido Salicilico 2% o Acido Azelaico 10%; Step 3: Crema con Ceramidi e Niacinamide[cite: 1, 4]."
                ]
            },
            {
                subtitle: "Protocollo B: Pelle Grassa a Tendenza Acneica",
                items: [
                    "MATTINA — Step 1: Detergente purificante non aggressivo; Step 2: Niacinamide 10% + Zinco 1% o Perossido di Benzoile 2.5% localizzato; Step 3: Idratante opacizzante oil-free; Step 4: SPF 50+ opacizzante[cite: 4].",
                    "SERA — Step 1: Doppia Detersione; Step 2: Adapalene 0.1% (Differin) o Tretinoina + Acido Azelaico; Step 3: Idratante leggero non-comedogenico[cite: 4]."
                ]
            },
            {
                subtitle: "Protocollo C: Pelle Secca o Barriera Danneggiata",
                items: [
                    "MATTINA — Step 1: Solo acqua tiepida; Step 2: Siero Acido Ialuronico + Centella Asiatica; Step 3: Crema ricca di lipidi e pantenolo (Cicaplast Baume B5); Step 4: SPF 50+ idratante[cite: 4].",
                    "SERA — Step 1: Detergente in crema senza schiuma; Step 2: Retinolo delicato con tecnica 'Sandwich' (idratante → retinolo → idratante); Step 3: Squalano puro o Vaselina per sigillare (Slugging)[cite: 4]."
                ]
            }
        ]
    },
    {
        id: "prot-mewing",
        badge: "Manuale Operativo • Miofunzione",
        title: "Guida Completa alla Postura Orale, Deglutizione Adulta e Masticazione",
        desc: "Rieducazione neuromuscolare dell'apparato stomatognatico, respirazione nasale e gestione delle forze masticatorie[cite: 2, 3, 7].",
        sections: [
            {
                subtitle: "1. Posizionamento Corretto dei 3 Terzi della Lingua",
                items: [
                    "La Punta (Tip): Posizionata sulla papilla incisiva dietro gli incisivi superiori senza spingere contro i denti[cite: 3, 7].",
                    "Il Corpo Medio e la Radice Posteriore: Contatto totale con il palato duro e molle (tramite il muscolo palatoglosso), mantenendo un leggero vuoto d'aria (Suction Hold)[cite: 2, 3, 7].",
                    "Contatto Dentale e Sigillo Labiale: Labbra chiuse senza sforzo e molari a lieve contatto o separati di 1–2 mm[cite: 2, 3, 7]."
                ]
            },
            {
                subtitle: "2. Deglutizione Adulta e Masticazione",
                items: [
                    "Mona Lisa Swallow: Ingoiare muovendo solo la lingua contro il palato, a labbra chiuse e denti a contatto, senza contrarre guance o mento[cite: 3, 7].",
                    "Masticazione Simmetrica: Usare cibi duri o gomme di masticazione dura (Mastic Gum) distribuendo il carico in egual misura su entrambi i lati[cite: 3, 7]."
                ]
            }
        ]
    }
];

// ============================================================================
// DATABASE ENCICLOPEDIA MASTER ESPANSO (10 MODULI ANATOMICI E CLINICI)
// ============================================================================
const ENCYCLOPEDIA_PART_1 = [
    {
        id: "osteo-01",
        category: "Osteologia & Struttura Ossea",
        title: "Anatomia della Mascella Superiore (Upper Maxilla) e Apertura Piriforme",
        subtitle: "Differenza tra Le Fort I, Le Fort II e proiezione paranasale",
        badge: "Fondamentale",
        summary: "La mascella superiore costituisce il pilastro architettonico del centro-faccia, includendo i margini infraorbitali, la fossa canina e l'apertura piriforme[cite: 3].",
        details: [
            "Proiezione dell'Apertura Nasale: Una mascella ben proiettata degrada dolcemente verso il naso (Slanted Infraorbital-to-Nose Contour); se retrusa, crea uno scalino netto[cite: 3].",
            "Spina Nasale Anteriore (ANS): Determina l'angolo naso-labiale ideale (94°–117°)[cite: 3].",
            "Fossa Canina: La depressione ossea che, unita agli zigomi, crea il chiaroscuro per le guance scavate[cite: 3]."
        ],
        solutions: "Opzioni Cliniche: Osteotomia Le Fort I/II, Impianti Paranasali su misura in PEEK o titanio[cite: 3]."
    },
    {
        id: "osteo-02",
        category: "Osteologia & Struttura Ossea",
        title: "Profondità Facciale (Facial Depth) e Rotazione Cranio-Facciale (CW vs CCW)",
        subtitle: "Relazione spaziale rispetto al Meato Acustico Esterno e al Piano di Francoforte",
        badge: "Cefalometria",
        summary: "Analisi dello sviluppo anteriore del volto rispetto a punti cranici fissi (trago e meato acustico) e indici fDHR[cite: 3].",
        details: [
            "Indice fDHR: Valore ideale ~1.25 – 1.32 per indicare sviluppo orizzontale[cite: 3].",
            "Rotazione Antioraria (CCW): Solleva e proietta in avanti mento e zigomi, compattando il terzo medio[cite: 3]."
        ],
        solutions: "Opzioni Cliniche: Chirurgia Ortognatica Bimascellare (Bimax) con rotazione CCW[cite: 3]."
    },
    {
        id: "osteo-03",
        category: "Osteologia & Struttura Ossea",
        title: "Meccanica Masticatoria e Rimodellamento Osseo (Incisivi vs Molari)",
        subtitle: "Come la direzione delle forze occlusali influenza la rotazione mascellare",
        badge: "Meccanotrasduzione",
        summary: "La masticazione è il principale stimolo meccanico (meccanotrasduzione) per la crescita e il rimodellamento delle suture cranio-facciali tramite gli osteociti[cite: 3].",
        details: [
            "Masticazione con gli Incisivi: Vettore anteriore-superiore che stimola la rotazione CCW e la proiezione mascellare[cite: 3].",
            "Forza Masticatoria: Picchi fino a 350–500 Newton che stimolano l'idrossiapatite ossea[cite: 3]."
        ],
        solutions: "Protocollo: Cibi duri e gomme ad alta resistenza (Mastic Gum) con carico bilanciato[cite: 3]."
    },
    {
        id: "osteo-04",
        category: "Osteologia & Struttura Ossea",
        title: "Prominenza Malare, Zigomi e Curva Ogee (Ogee Curve)",
        subtitle: "Proiezione zigomatica laterale e anteriore nel sostegno dei tessuti molli",
        badge: "Terzo Medio",
        summary: "L'osso zigomatico determina la larghezza bizigomatica del volto, il supporto periorbitale e la Curva Ogee[cite: 2, 7].",
        details: [
            "Zigomi Alti: Posizionati subito sotto il canto laterale dell'occhio, coprono l'81–100% dell'altezza rispetto alla base nasale[cite: 7].",
            "Curva Ogee: Doppia curva a S tra zigomo, guancia e linea mandibolare[cite: 7]."
        ],
        solutions: "Opzioni Cliniche: Calo ponderale al 10–12% BF, filler ad alto G-prime, impianti malari personalizzati[cite: 2, 7]."
    },
    {
        id: "osteo-05",
        category: "Osteologia & Struttura Ossea",
        title: "Asimmetrie Cranio-Facciali, Osso Sfenoide e Articolazione Temporo-Mandibolare (ATM)",
        subtitle: "Cause biomeccaniche, muscolari e posturali delle asimmetrie del volto",
        badge: "Biomeccanica",
        summary: "Asimmetrie marcate derivano da squilibri muscolari dei muscoli pterigoidei, disfunzioni dell'ATM o inclinazioni posturali croniche[cite: 3].",
        details: [
            "Osso Sfenoide: La 'pietra angolare' della base cranica che governa i rapporti sfenobasilari[cite: 3].",
            "Bruxismo e ATM: Generano ipertrofia asimmetrica del massetere e deviazione condilare[cite: 3]."
        ],
        solutions: "Protocollo: Masticazione bilaterale, bite gnatologico, rilascio miofasciale[cite: 3]."
    }
];

const ENCYCLOPEDIA_PART_2 = [
    {
        id: "naso-01",
        category: "Morfologia Nasale, Labiale & Sorriso",
        title: "Analisi Cefalometrica del Profilo Nasale (Metodo dei 4 Angoli e Proiezione)",
        subtitle: "Valutazione matematica su Piano di Francoforte, Metodo di Goode e Radix",
        badge: "Profilometria",
        summary: "L'analisi oggettiva del naso richiede l'allineamento sul Piano di Francoforte e la valutazione di 4 angoli chiave e della proiezione con il metodo di Goode[cite: 8].",
        details: [
            "I 4 Angoli del Profilo: Angolo dorsale (0°), Supratip break angle (0°–15°), Asse delle narici (~7°) e Inclinazione del setto (10°–15°)[cite: 8].",
            "Metodo di Goode: Rapporto distanza solco-punta / lunghezza dorsale pari a 0.55 – 0.60[cite: 8]."
        ],
        solutions: "Opzioni Cliniche: Rinoplastica di de-proiezione (MCO/LCO, dome truncation) o innesti sul radix[cite: 8]."
    },
    {
        id: "labbra-01",
        category: "Morfologia Nasale, Labiale & Sorriso",
        title: "Anatomia delle 12 Unità Labiali, Curvatura e Tonicità Dento-Scheletrica",
        subtitle: "Struttura del vermiglio, impatto delle malocclusioni e larghezza della rima orale",
        badge: "Estetica Orale",
        summary: "Le labbra riflettono direttamente il supporto osseo mascellare e mandibolare e l'allineamento dentale[cite: 8].",
        details: [
            "Arco Invertito: Filtro centrale più corto delle commessure, tipico di ipoplasia mascellare (Classe III)[cite: 8].",
            "Tonicità Labiale: Correlata alle Classi II e III e alla protrusione bimascellare[cite: 8]."
        ],
        solutions: "Protocollo: Idratazione con acido ialuronico, peptidi e stimolazione del collagene[cite: 4, 8]."
    },
    {
        id: "labbra-02",
        category: "Morfologia Nasale, Labiale & Sorriso",
        title: "Chirurgia Estetica delle Labbra: Lip Lift, Avanzamento V-Y e Commissuroplastica",
        subtitle: "Revisione sistematica delle procedure di accorciamento del filtro e allargamento orale",
        badge: "Chirurgia Periorale",
        summary: "Tecniche chirurgiche avanzate per gestire filtri labiali lunghi (>15–18mm) e rima orale stretta (microstomia estetica)[cite: 8].",
        details: [
            "Subnasal Bullhorn Lip Lift: Riduce permanentemente il filtro e scopre gli incisivi superiori[cite: 8].",
            "Commissuroplastica Laterale: Allargamento chirurgico della rima orale di 6–8 mm totali[cite: 8]."
        ],
        solutions: "Opzioni Cliniche: Bullhorn Lip Lift, V-Y Advancement, Commissuroplastica, Botox Lip Flip temporaneo[cite: 8]."
    },
    {
        id: "sorriso-01",
        category: "Morfologia Nasale, Labiale & Sorriso",
        title: "Igiene Orale Avanzata, Sbiancamento Chimico e Microbioma dell'Alito",
        subtitle: "Protocolli con Perossidi, Oil Pulling, Raschietto Linguale e remineralizzazione",
        badge: "Odontoiatria",
        summary: "Sbiancamento professionale con perossido di carbammide, controllo dei batteri anaerobi e uso del raschietto linguale in acciaio[cite: 1, 8, 9].",
        details: [
            "Perossido di Carbammide 16%–20%: Il gold standard per lo sbiancamento domiciliare sicuro in 14 giorni[cite: 8].",
            "Controllo dell'Alitosi (VSC): Il raschietto linguale in acciaio riduce i composti solforati volatili del 75%[cite: 1, 8]."
        ],
        solutions: "Protocollo: Filo serale, spazzolino elettrico, raschietto linguale, oli essenziali di cannella e probiotici orali K12[cite: 8]."
    },
    {
        id: "skin-01",
        category: "Dermatologia & Collagene",
        title: "Fisiologia della Barriera Cutanea: Modello 'Brick & Mortar' e TEWL",
        subtitle: "Come prevenire la disidratazione transepidermica e impostare la detersione",
        badge: "Fondamenti Cute",
        summary: "Protezione dello strato corneo tramite ceramidi, colesterolo, acidi grassi liberi e mantenimento del mantello acido (pH 4.5–5.5)[cite: 4].",
        details: [
            "TEWL (Transepidermal Water Loss): Prevenzione della perdita d'acqua e protezione del Natural Moisturizing Factor (NMF)[cite: 4].",
            "Doppia Detersione: Primo step oleoso per SPF/sebo, secondo step con detergente delicato a pH 5.0[cite: 4]."
        ],
        solutions: "Protocollo: Ceramidi NP/AP/EOP, Pantenolo, Squalano, Niacinamide e idratazione sigillata[cite: 4]."
    },
    {
        id: "skin-02",
        category: "Dermatologia & Collagene",
        title: "Farmacologia dei Retinoidi, Vitamina C, Niacinamide e Acidi Esfolianti",
        subtitle: "Meccanismi di conversione enzimatica, pH di penetrazione e sinergie",
        badge: "Gold Standard",
        summary: "Guida clinica all'uso di Tretinoina, Retinolo, Acido L-Ascorbico (Regola di Pinnell), Niacinamide e AHA/BHA[cite: 1, 4].",
        details: [
            "Gerarchia Retinoidi: Tretinoina (0 conversioni) vs Retinaldeide (1) vs Retinolo (2)[cite: 4].",
            "Regola di Pinnell (Vitamina C): Concentrazione 10–20%, pH <3.5 stabilizzato con Vitamina E e Acido Ferulico[cite: 4]."
        ],
        solutions: "Protocollo: Introduzione graduale dei retinoidi (2 sere a settimana) e SPF 50+ quotidiano obbligatorio[cite: 1, 4]."
    },
    {
        id: "skin-03",
        category: "Dermatologia & Collagene",
        title: "Biochimica della Sintesi del Collagene, Peptidi, Fotobiomodulazione e Blu di Metilene",
        subtitle: "Cofattori molecolari, inibizione delle MMP, Red Light Therapy e salute mitocondriale",
        badge: "Scienza Anti-Aging",
        summary: "Sintesi del procollagene I/III tramite cofattori (Vitamina C, ferro, zinco, magnesio), inibizione delle MMP, microneedling e Blu di Metilene USP[cite: 4, 9].",
        details: [
            "Cofattori di Sintesi: Idrossilazione di prolina e lisina dipendente da Vitamina C e ferro nel reticolo endoplasmatico[cite: 4].",
            "Fotobiomodulazione (RLT): LED rosso (630–660nm) e infrarosso (850nm) per stimolare i mitocondri e il procollagene[cite: 4, 9]."
        ],
        solutions: "Protocollo: Collagene idrolizzato orale, Astaxantina, Picnogenolo, Microneedling medico (1.0–1.5mm) e SPF 50+ PA++++[cite: 4, 9]."
    },
    {
        id: "skin-04",
        category: "Dermatologia & Collagene",
        title: "Classificazione e Correzione dei Solchi Nasolabiali (Pieghe Melolabiali)",
        subtitle: "Diagnosi differenziale tra Tipo A (Osseo), Tipo B (Adiposo) e Tipo C (Muscolare)",
        badge: "Anatomia Clinica",
        summary: "I solchi nasolabiali richiedono un approccio diagnostico basato sulla causa: ipoplasia ossea (Tipo A), ptosi adiposa (Tipo B) o ipertonia dinamica (Tipo C).",
        details: [
            "Tipo A (Osseo): Trattato con filler profondi nella fossa piriforme o impianti paranasali.",
            "Tipo B (Adiposo): Trattato con controllo del peso, HIFU, radiofrequenza o biostimolatori.",
            "Tipo C (Muscolare): Trattato con micro-dosi di tossina botulinica."
        ],
        solutions: "Protocollo: Diagnosi eziologica mirata, protezione del collagene e posizione supina nel sonno."
    },
    {
        id: "skin-05",
        category: "Dermatologia & Collagene",
        title: "Trattamento Clinico degli Inestetismi Cutanei: Acne, Pori, Cicatrici e Rasatura",
        subtitle: "Gestione dermatologica di comedoni, cicatrici atrofiche, discromie e follicolite da barba",
        badge: "Pronto Intervento Cute",
        summary: "Protocolli dermatologici per acne vulgaris, pori dilatati, cicatrici atrofiche e prevenzione della follicolite da rasatura[cite: 4].",
        details: [
            "Pori e Sebo: BHA (Acido Salicilico) per pulire i pori in profondità senza stress meccanico[cite: 4].",
            "Follicolite da Rasatura: Uso di rasoi di sicurezza a singola lama (Safety Razor) seguendo il verso del pelo (with the grain)[cite: 4]."
        ],
        solutions: "Protocollo: Benzoyl Peroxide / Adapalene per l'acne, Safety razor per la barba, trattamenti ambulatoriali (Laser CO2 / Subcision) per le cicatrici atrofiche[cite: 4]."
    },
    {
        id: "color-01",
        category: "Colorimetria & Camouflage",
        title: "Le 5 Leggi della Colorimetria Facciale, Spazio Colore CIELAB e Carotenoidi",
        subtitle: "Scienza della percezione del colorito, contrasto cromatico e armocromia nell'uomo",
        badge: "Colorimetria",
        summary: "L'attrattività percepita è guidata dai parametri CIELAB (a* rossore da perfusione, b* doratura da carotenoidi e luminosità L*)[cite: 1, 4].",
        details: [
            "Carotenoidi e 'Golden Glow': Assunzione di beta-carotene, licopene e astaxantina per un sottotono cutaneo caldo e sano[cite: 1, 2].",
            "Le 5 Leggi del Contrasto: Capelli e sopracciglia più scuri della pelle, sclera e denti bianchi naturali, regola dei 3 colori nell'abbigliamento[cite: 1]."
        ],
        solutions: "Protocollo: Integrazione di carotenoidi, Acido Cogico per uniformare le discromie e armocromia nell'abbigliamento[cite: 1, 4]."
    },
    {
        id: "color-02",
        category: "Colorimetria & Camouflage",
        title: "Guida al Camouflage Correttivo Maschile (No-Makeup Look Invisibile)",
        subtitle: "Come neutralizzare occhiaie, rossori e imperfezioni mantenendo un aspetto 100% naturale",
        badge: "Guida Pratica",
        summary: "Uso strategico e invisibile di correttori a base di colori complementari e BB cream minerali con SPF per ritocchi professionali.",
        details: [
            "Teoria dei Colori: Il verde neutralizza il rosso (brufoli/couperose); il pesca/arancio neutralizza il blu-viola (occhiaie vascolari)[cite: 4].",
            "Applicazione Invisibile: Piccole quantità sfumate col polpastrello e fissate con cipria traslucida[cite: 4]."
        ],
        solutions: "Protocollo: Correttore fluido pesca/verde non-comedogenico, BB cream SPF 50+ e rimozione serale con acqua micellare[cite: 4]."
    }
];

const ENCYCLOPEDIA_PART_3 = [
    // ------------------------------------------------------------------------
    // CATEGORIA 7: TRICOLOGIA & ARCHITETTURA CAPILLARE
    // ------------------------------------------------------------------------
    {
        id: "hair-01",
        category: "Tricologia & Architettura Capillare",
        title: "Diagnostica del Capello: Sistema Andre Walker (1A–4C), Spessore e Porosità",
        subtitle: "Come determinare scientificamente i prodotti e la frequenza di lavaggio ideali",
        badge: "Fondamenti Capelli",
        summary: "La scelta dei prodotti tricologici richiede l'analisi di spessore del fusto e porosità della cuticola, andando oltre il semplice pattern estetico[cite: 5].",
        details: [
            "Sistema Andre Walker: Classificazione da 1A (liscio fine) a 4C (spirali afro strette)[cite: 5].",
            "Test di Porosità (Bicchiere d'Acqua): Capello galleggiante (bassa porosità) vs capello affondato (alta porosità)[cite: 5].",
            "Ricostruzione Disolfuro: Uso di Olaplex N.3 per sigillare i micro-fori corticali nei capelli danneggiati[cite: 5]."
        ],
        solutions: "Protocollo: Scelta mirata di shampoo senza solfati aggressivi, leave-in conditioner, oli leggeri (squalano/argan) e federa in seta[cite: 2, 5]."
    },
    {
        id: "hair-02",
        category: "Tricologia & Architettura Capillare",
        title: "Design Morfologico del Taglio: Le 6 Forme del Viso e i Picchi Temporali",
        subtitle: "Come bilanciare le proporzioni craniche e il rapporto bitemporale-bizigomatico",
        badge: "Visagismo Maschile",
        summary: "Il taglio di capelli ideale corregge otticamente i difetti strutturali e ripristina i picchi temporali (temple peaks) per ottimizzare il rapporto bitemporale/bizigomatico[cite: 5, 9].",
        details: [
            "Picchi Temporali (Temple Peaks): Triangoli di capelli che chiudono lateralmente la fronte; se arretrati o assenti, femminilizzano il terzo superiore[cite: 5, 9].",
            "Linee Guida per i 6 Morfotipi: Ovale (versatile), Tondo (lati corti e volume alto), Quadrato (buzzcut o medi mossi), A Cuore (medie morbide per coprire le tempie), Oblungo/Rettangolare (volume laterale, no ciuffi alti), A Diamante (frangia e ampiezza temporale)[cite: 5]."
        ],
        solutions: "Protocollo: Consulenza con hairstylist professionista, prodotti texturizzanti a base di polveri (texture powder) e argille opache[cite: 5]."
    },
    {
        id: "hair-03",
        category: "Tricologia & Architettura Capillare",
        title: "Fisiopatologia dell'Alopecia Androgenetica (AGA) e Trattamenti Clinici",
        subtitle: "Scala di Norwood, ruolo di DHT/PGD2, metilazione del DNA, farmaci e trapianto FUE vs FUT",
        badge: "Tricologia Medica",
        summary: "L'AGA è guidata dalla sensibilità al DHT dei recettori AR sul vertice e tempie, dall'accumulo di PGD2 e dalla riduzione della fase Anagen[cite: 5, 9].",
        details: [
            "Scala di Norwood: Classificazione della progressione da NW1 a NW7 con monitoraggio tramite tricoscopia[cite: 5].",
            "Terapie Mediche Validate: Finasteride/Dutasteride (blocco 5-AR), Minoxidil 5% (vasodilatazione e attivazione Wnt/β-catenina tramite sulfotransferasi stimolata da microneedling), Ketoconazolo shampoo[cite: 2, 5, 9].",
            "Chirurgia (FUE vs FUT): Prelievo follicolare FUE singolo senza cicatrice lineare rispetto alla vecchia losanga FUT[cite: 5]."
        ],
        solutions: "Protocollo Clinico: Trattamento medico precoce (Finasteride topica/orale + Minoxidil + Microneedling 1.0mm settimanale) e valutazione FUE per i recessi stabilizzati[cite: 2, 5, 9]."
    },

    // ------------------------------------------------------------------------
    // CATEGORIA 8: POSTURA, PROPORZIONI CORPOREE & ALLENAMENTO DEL COLLO
    // ------------------------------------------------------------------------
    {
        id: "body-01",
        category: "Postura, Corpo & Allenamento Cervicale",
        title: "Biomeccanica Posturale: Correzione di Anterior Pelvic Tilt e Forward Head Posture",
        subtitle: "Come gli squilibri muscolari riducono la statura fino a 5 cm e alterano il profilo facciale",
        badge: "Biomeccanica",
        summary: "L'antiversione pelvica (APT) e la testa in avanti comprimono la colonna vertebrale, riducendo la statura reale e compromettendo l'estetica del collo e del profilo[cite: 6].",
        details: [
            "Catena Cinetica dell'APT: Ileopsoas e flessori d'anca corti, glutei e addome deboli, con conseguente iperlordosi lombare e cifosi toracica compensativa[cite: 6].",
            "Test di Thomas: Valutazione clinica dell'accorciamento dell'ileopsoas[cite: 6]."
        ],
        solutions: "Protocollo Posturale (10 Min): Stretching dell'ileopsoas (Couch stretch), glute bridge in isometria, face pulls per i romboidi, chin tucks e dead hangs alla sbarra[cite: 6]."
    },
    {
        id: "body-02",
        category: "Postura, Corpo & Allenamento Cervicale",
        title: "Antropometria del Corpo Maschile: Frame Scheletrico, Clavicole e Rapporti Aurei",
        subtitle: "Larghezza biacromiale vs bideltoidea, angolo clavicolare e canone di Steve Reeves",
        badge: "Proporzioni Corporee",
        summary: "Il V-Taper ideale richiede clavicole orizzontali e larghe, scapole proiettate lateralmente e rapporti aurei tra spalle, torace e vita (SWR ~1.618)[cite: 6, 9].",
        details: [
            "Larghezza Biacromiale: Distanza ossea tra i processi acromiali (media 40–41 cm; d'élite >43 cm)[cite: 6, 9].",
            "Canone di Steve Reeves: Braccia, collo e polpacci con circonferenze perfettamente bilanciate (es. braccio = 252% del polso)[cite: 6]."
        ],
        solutions: "Protocollo: Ipertrofia mirata del deltoide laterale, gran dorsale e pettorale superiore con controllo del girovita (vacuum addominale)[cite: 6]."
    },
    {
        id: "body-03",
        category: "Postura, Corpo & Allenamento Cervicale",
        title: "Anatomia e Protocollo Completo di Allenamento Cervicale (Neck Training)",
        subtitle: "I 4 movimenti funzionali, lo sternocleidomastoideo e le 8 progressioni di sicurezza",
        badge: "Alto Impatto Visivo",
        summary: "Un collo muscoloso e proporzionato incornicia la mandibola, elimina l'aspetto infantile e aumenta la percezione di forza e mascolinità[cite: 7, 9, 10].",
        details: [
            "I 4 Piani di Movimento: Flessione (SCM), Estensione (Trapezio/Splenio), Flessione Laterale (Scaleni/SCM) e Rotazione Assiale[cite: 10].",
            "Regole di Sicurezza: Alte ripetizioni (15–30 reps), progressione graduale a corpo libero per 4–6 settimane prima di aggiungere sovraccarichi con imbracatura (Neck Harness)[cite: 10]."
        ],
        solutions: "Protocollo d'Allenamento: 2–3 volte a settimana, 4–6 serie totali a fine seduta (Head Nods per flessione, Head Extensions su panca, e flessioni laterali)[cite: 10]."
    },

    // ------------------------------------------------------------------------
    // CATEGORIA 9: NUTRIZIONE, MICROBIOTA, SONNO & ENDOCRINOLOGIA
    // ------------------------------------------------------------------------
    {
        id: "sys-01",
        category: "Fisiologia, Sonno & Endocrinologia",
        title: "Ricomposizione Corporea (10%–12% BF), Antinutrienti e Salute del Microbiota",
        subtitle: "Legge di Eric Helms per preservare la massa magra e riduzione dell'infiammazione intestinale",
        badge: "Nutrizione Clinica",
        summary: "Mantenere la Golden Range al 10–12% BF richiede un deficit calorico moderato (300–500 kcal) e proteine a 2.0–2.2 g/kg, eliminando gli antinutrienti vegetali irritanti[cite: 1, 6, 7].",
        details: [
            "Regola dell'1% di Eric Helms: Perdere massimo l'1% del peso corporeo a settimana per evitare il catabolismo muscolare e il crollo metabolico[cite: 7].",
            "Antinutrienti Vegetali: Fitati (inibitori di zinco/ferro), ossalati, lectine e saponine; neutralizzabili con ammollo prolungato (12–24h), fermentazione e cottura[cite: 1, 6, 7].",
            "Microbiota Intestinale: Riparazione della mucosa con brodo d'ossa (glutammina/glicina) e consumo di cibi fermentati probiotici[cite: 1, 7]."
        ],
        solutions: "Protocollo Nutrizionale: Dieta ricca di proteine nobili (uova, carne grass-fed, pesce selvaggio), carboidrati puliti (patate/riso) e grassi saturi/monoinsaturi per la steroidogenesi[cite: 1, 6, 7]."
    },
    {
        id: "sys-02",
        category: "Fisiologia, Sonno & Endocrinologia",
        title: "Neurobiologia del Sonno, Ritmo Circadiano delle 24 Ore e Funzione Mitocondriale",
        subtitle: "Sistema glinfatico, rilascio pulsatile di GH/Testosterone e cronobiologia",
        badge: "Anti-Aging & Ormoni",
        summary: "Il sonno profondo (SWS) attiva il sistema glinfatico di pulizia cerebrale e rilascia il picco di GH; la cronobiologia regola il cortisolo e la melatonina[cite: 1, 6, 7].",
        details: [
            "Sistema Glinfatico: Rimozione delle neurotossine (proteina tau e beta-amiloide) durante il sonno profondo a onde lente[cite: 6, 7].",
            "Tabella Cronobiologica 24 Ore: Picco di GH alle 02:00, cortisolo al risveglio (07:00), picco di forza e testosterone libero nel tardo pomeriggio (17:00)[cite: 1, 6, 7].",
            "Salute Mitocondriale: Biogenesi mitocondriale stimolata da PQQ, CoQ10, freddo, esercizio e luce infrarossa[cite: 4, 6, 7]."
        ],
        solutions: "Protocollo Sonno & Mitocondri: Blocco della luce blu 2h prima, camera a 16–19°C, buio totale, Magnesio Bisglicinato, Glicina e Ashwagandha KSM-66[cite: 1, 6, 7]."
    },
    {
        id: "sys-03",
        category: "Fisiologia, Sonno & Endocrinologia",
        title: "Endocrinologia Maschile: Asse GH/IGF-1, Androgeni (T/DHT) e Recettori Androgeni (AR)",
        subtitle: "Meccanismi fisiologici dello sviluppo dimorfico e ottimizzazione naturale del profilo ormonale",
        badge: "Endocrinologia",
        summary: "Ottimizzazione naturale dell'asse somatotropo (GH/IGF-1) e dell'asse gonadico (Testosterone/DHT) tramite blocco dell'aromatasi e up-regulation dei recettori androgeni (AR)[cite: 1, 6, 7, 9].",
        details: [
            "Asse GH / IGF-1: Stimolazione della crescita ossea e del collagene; ruolo degli estrogeni nella chiusura delle piastre epifisarie[cite: 7].",
            "Testosterone e DHT: Sintesi a partire dal colesterolo testicolare e surrenalico; conversione periferica tramite 5-alfa-reduttasi[cite: 1, 6, 7, 9].",
            "Sensibilità dei Recettori Androgeni (AR): Aumento della densità dei recettori tramite L-Carnitina L-Tartrato (2g/die) e allenamento coi pesi[cite: 1, 6, 7, 9]."
        ],
        solutions: "Protocollo Endocrino Naturale: Grassi saturi alimentari, Zinco picolinato, Magnesio, Boro (3–6mg per abbassare SHBG), Vitamina D3 (60–80 ng/dL) e azzeramento dell'alcol e degli xenoestrogeni (plastiche/parabeni)[cite: 1, 6, 7, 9]."
    },

    // ------------------------------------------------------------------------
    // CATEGORIA 10: VOCE, OLFATTO & TRATTI SECONDARI
    // ------------------------------------------------------------------------
    {
        id: "sec-01",
        category: "Voce, Olfatto & Tratti Secondari",
        title: "Acustica della Voce Maschile: Frequenza Fondamentale (Hz) e Risonanza Diaframmatica",
        subtitle: "Fisiologia della laringe, formanti vocali ed esercizi di rilassamento cordale",
        badge: "Comunicazione & Voce",
        summary: "La frequenza fondamentale ideale maschile (85–96 Hz) e la densità delle formanti vocali proiettano una maggiore dimensione corporea e autorevolezza sociale[cite: 3, 10].",
        details: [
            "Fisiologia Laringea: Il testosterone ingrandisce la cartilagine tiroidea (pomo d'Adamo) e ispessisce le corde vocali[cite: 10].",
            "Risonanza Diaframmatica: Spostare il sostegno vocale dal collo (frequenze acute) al diaframma e al petto tramite l'esercizio dell'Humming[cite: 10]."
        ],
        solutions: "Protocollo Vocale: Respirazione diaframmatica profonda, esercizi di risonanza ('Deep Chanting' / Ohm) e rilassamento laringeo quotidiano[cite: 10]."
    },
    {
        id: "sec-02",
        category: "Voce, Olfatto & Tratti Secondari",
        title: "Scienza Olfattiva: Il Sistema Limbico, l'Hedione (VN1R1) e l'Architettura delle Fragranze",
        subtitle: "Come l'olfatto influenza l'amigdala, la stagionalità dei profumi e il layering molecolare",
        badge: "Scienza dell'Aroma",
        summary: "Il sistema olfattivo comunica direttamente con l'amigdala e l'ipotalamo. La molecola sintetica Hedione attiva specificamente il recettore feromonale umano VN1R1[cite: 1, 9].",
        details: [
            "L'Hedione (Diidrojasmonato di Metile): Studi neurofisiologici dimostrano che l'Hedione attiva il recettore putativo dei ferormoni VN1R1, stimolando l'area ipotalamica legata alla risposta sessuale e alla reciprocità sociale nelle donne[cite: 1, 9].",
            "Termodinamica e Stagionalità: Uso di EDT fresche e agrumate in estate; EDP calde, ambrate e speziate in inverno[cite: 1, 9]."
        ],
        solutions: "Protocollo Olfattivo: Applicazione sui punti di pulsazione corporea (clavicole, nuca) di fragranze ricche di Hedione (es. Dior Eau Sauvage, Molecule 01 / Iso E Super) o profumi di alta profumeria stagionale[cite: 1, 9]."
    },
    {
        id: "sec-03",
        category: "Voce, Olfatto & Tratti Secondari",
        title: "Barba ('Designer Stubble'), Sopracciglia e Psicologia dei Tratti Secondari",
        subtitle: "Studi sperimentali su 9.991 soggetti riguardanti barba, cicatrici e tatuaggi",
        badge: "Studi Comportamentali",
        summary: "La barba 'Heavy Stubble' di 10 giorni (2.5–3.5 mm) risulta statisticamente la più attraente nei grandi sondaggi globali poiché unisce virilità e visibilità della mascella[cite: 8, 9, 10].",
        details: [
            "Lo Studio sui 9.991 Partecipanti (Dixson et al.): La barba di 10 giorni vince su barba lunga e viso pulito, bilanciando maturità sessuale e definizione ossea[cite: 8, 9, 10].",
            "Cicatrici Facciali e Tatuaggi: Lievi cicatrici aumentano l'appeal per relazioni brevi (segnale di coraggio); i tatuaggi sul corpo (mai su viso/mani) aumentano la dominanza percepita[cite: 9, 10]."
        ],
        solutions: "Protocollo di Grooming: Regolabarba di precisione impostato a 3 mm con rifinitura pulita sul collo (1.5 cm sopra il pomo d'Adamo) e olio da barba emolliente[cite: 8, 10]."
    }
];
