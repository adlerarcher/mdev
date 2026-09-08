/** Geothermal international markets — content records (September 2026 brief). */

export const REGIONS = [
  { id: 'asia-pacific', label: 'Asia and Pacific' },
  { id: 'africa', label: 'Africa' },
  { id: 'americas', label: 'Americas' },
]

export const APPLICATIONS = [
  { id: 'electricity', label: 'Electricity' },
  { id: 'heating', label: 'Heating' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'direct-use', label: 'Direct use' },
]

export const DEVELOPMENT_TYPES = [
  { id: 'financing', label: 'Financing' },
  { id: 'policy', label: 'Policy / rules' },
  { id: 'project', label: 'Project milestone' },
  { id: 'procurement', label: 'Procurement' },
]

/** Document records — issuer, URL, version, retrieval notes. */
export const DOCUMENTS = {
  'nedo-nextgen-2026': {
    id: 'nedo-nextgen-2026',
    issuer: 'NEDO (Japan)',
    title: 'Next-generation geothermal program',
    url: 'https://green-innovation.nedo.go.jp/project/next-generation-geothermal/',
    publicationDate: '2026-08-28',
    notes: 'Budget ceiling ¥110.2 billion; solicitation opened August 28, 2026.',
  },
  'taiwan-regs-2024': {
    id: 'taiwan-regs-2024',
    issuer: 'Ministry of Economic Affairs (Taiwan)',
    title: 'Geothermal exploration and development regulations',
    url: 'https://law.moea.gov.tw/EngLawContent.aspx?id=10750&lan=E',
    publicationDate: '2024-05-13',
  },
  'ormat-q2-2026': {
    id: 'ormat-q2-2026',
    issuer: 'Ormat Technologies',
    title: 'Second Quarter 2026 Financial Results — Wapsalit exploration financing',
    url: 'https://investor.ormat.com/news-events/news/news-details/2026/Ormat-Technologies-Reports-Second-Quarter-2026-Financial-Results/default.aspx',
    publicationDate: '2026-05-01',
    notes: 'Month approximate from brief (May 2026). Confirm exact release date on implementation.',
  },
  'nz-strategy-2026': {
    id: 'nz-strategy-2026',
    issuer: 'MBIE (New Zealand)',
    title: 'Geothermal strategy released',
    url: 'https://www.mbie.govt.nz/about/news/geothermal-strategy-released',
    publicationDate: '2026-03-01',
  },
  'afdb-kenya-menengai': {
    id: 'afdb-kenya-menengai',
    issuer: 'African Development Bank',
    title: 'AfDB loan to boost Kenya clean energy transition — Menengai',
    url: 'https://www.afdb.org/en/news-and-events/press-releases/african-development-bank-approves-165-million-loan-boost-kenyas-clean-energy-transition-90373',
  },
  'afdb-ethiopia-tulu': {
    id: 'afdb-ethiopia-tulu',
    issuer: 'African Development Bank',
    title: 'Tulu Moye project record',
    url: 'https://mapafrica.afdb.org/en/projects/46002-P-ET-FAA-002',
    notes: 'Confirm current implementation status before publishing as achieved.',
  },
  'mexico-regs-2025': {
    id: 'mexico-regs-2025',
    issuer: 'Government of Mexico',
    title: 'October 2025 implementing regulations',
    url: 'https://sidof.segob.gob.mx/notas/5769154',
    publicationDate: '2025-10-01',
  },
  'chile-law-21711': {
    id: 'chile-law-21711',
    issuer: 'Ministry of Energy (Chile)',
    title: 'Law 21.711 and shallow geothermal applications',
    url: 'https://energia.gob.cl/node/25553',
  },
  'wb-elsalvador-2025': {
    id: 'wb-elsalvador-2025',
    issuer: 'World Bank',
    title: 'World Bank financing for Chinameca and direct heat uses',
    url: 'https://www.worldbank.org/en/news/press-release/2025/03/26/banco-mundial-el-salvador-impulsan-energia-geotermica-desarrollo-sostenible-inclusivo',
    publicationDate: '2025-03-26',
  },
  'dominica-irc-2026': {
    id: 'dominica-irc-2026',
    issuer: 'IRC Dominica',
    title: 'Geothermal in commercial operation',
    url: 'https://www.ircdominica.org/news/geothermal-is-now-in-commercial-operation-what-it-means-for-dominica/',
    publicationDate: '2026-07-31',
  },
  'mnre-policy-notice-2025': {
    id: 'mnre-policy-notice-2025',
    issuer: 'MNRE (India)',
    title: 'National Policy on Geothermal Energy — notice',
    url: 'https://mnre.gov.in/en/notice/national-policy-on-geothermal-energy/',
    publicationDate: '2025-09-01',
    accessed: '2026-09-08',
  },
  'pib-india-geothermal-2025': {
    id: 'pib-india-geothermal-2025',
    issuer: 'Press Information Bureau (India)',
    title: 'Government announcement — National Policy on Geothermal Energy (Key Highlights)',
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2167657&lang=2&reg=48',
    publicationDate: '2025-09-17',
    accessed: '2026-09-08',
  },
  'mnre-policy-pdf-2025': {
    id: 'mnre-policy-pdf-2025',
    issuer: 'MNRE (India)',
    title: 'National Policy on Geothermal Energy (PDF)',
    url: 'https://cdnbbsr.s3waas.gov.in/s3716e1b8c6cd17b771da77391355749f3/uploads/2025/09/202509152136711668.pdf',
    publicationDate: '2025-09-01',
    accessed: '2026-09-08',
    notes: 'Introduction, paragraphs b–f: MNRE lead, state nodal agencies, developers, research institutions, entrepreneurs; applications.',
  },
  'doe-india-retap': {
    id: 'doe-india-retap',
    issuer: 'U.S. Department of Energy',
    title: 'U.S.–India Strategic Clean Energy Partnership ministerial joint statement (RETAP)',
    url: 'https://www.energy.gov/articles/us-india-strategic-clean-energy-partnership-ministerial-joint-statement',
    accessed: '2026-09-08',
    notes: 'RETAP launched August 2023; geothermal is a documented focus.',
  },
  'ga-aecr-2026-geothermal': {
    id: 'ga-aecr-2026-geothermal',
    issuer: 'Geoscience Australia',
    title: "Australia's Energy Commodity Resources 2026 — Geothermal energy",
    url: 'https://www.ga.gov.au/aecr2026/overview',
    publicationDate: '2026-01-01',
    accessed: '2026-09-08',
  },
  'ga-aecr-2025-geothermal': {
    id: 'ga-aecr-2025-geothermal',
    issuer: 'Geoscience Australia',
    title: "Australia's Energy Commodity Resources 2025 — Geothermal",
    url: 'https://www.ga.gov.au/aecr2025/geothermal',
    publicationDate: '2025-01-01',
    accessed: '2026-09-08',
    notes: 'Highlights and Australia\'s geothermal resources; War Memorial October 2024.',
  },
  'mra-png-irena-2015': {
    id: 'mra-png-irena-2015',
    issuer: 'Mineral Resources Authority (Papua New Guinea) / IRENA host',
    title: 'MRA presentation — PNG geothermal current status (Lihir historical figures)',
    url: 'https://www.irena.org/-/media/Files/IRENA/Agency/Events/2015/Nov/13/Day2-Session2-PapuaNewGuinea.pdf?hash=6402820953F477BB3EF8053AFB507C23D010C01A&la=en',
    publicationDate: '2015-11-01',
    accessed: '2026-09-08',
    notes: 'Records 26 MW commissioned in 2003 and upgrade to 56 MW in 2005. Historical installation figures only.',
  },
  'newmont-lihir': {
    id: 'newmont-lihir',
    issuer: 'Newmont',
    title: 'Lihir operation overview',
    url: 'https://operations.newmont.com/papua-new-guinea/lihir/',
    accessed: '2026-09-08',
  },
  'mra-geoscience-energy': {
    id: 'mra-geoscience-energy',
    issuer: 'Mineral Resources Authority (Papua New Guinea)',
    title: 'Geoscience for Energy',
    url: 'https://mra.gov.pg/geological-survey/geoscienceforenergy/',
    accessed: '2026-09-08',
  },
  'egat-alternative': {
    id: 'egat-alternative',
    issuer: 'EGAT (Thailand)',
    title: 'Alternative Energy — Background and Geothermal Energy',
    url: 'https://www.egat.co.th/home/en/alternative/',
    accessed: '2026-09-08',
  },
  'egat-energy-mgmt-2025': {
    id: 'egat-energy-mgmt-2025',
    issuer: 'EGAT (Thailand)',
    title: 'Energy Management — 2025 fuel discussion',
    url: 'https://www.egat.co.th/sustainability/en/environment/energy-management-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/',
    publicationDate: '2025-01-01',
    accessed: '2026-09-08',
  },
  'doe-ph-key-energy-2024': {
    id: 'doe-ph-key-energy-2024',
    issuer: 'Department of Energy (Philippines)',
    title: 'Key Energy Statistics 2024 (pocket edition)',
    url: 'https://prod-cms.doe.gov.ph/documents/d/guest/-final-11-20-25_doe-key-energy-stat-pocket-size-2024-pdf',
    publicationDate: '2024-12-31',
    accessed: '2026-09-08',
    notes: 'Geothermal installed generating capacity 1,952 MW for 2023 and 2024; dependable capacity 1,708 MW; generation 10,789 GWh in 2024.',
  },
  'doe-ph-re-summary-2025-04': {
    id: 'doe-ph-re-summary-2025-04',
    issuer: 'Department of Energy (Philippines)',
    title: 'Summary of Renewable Energy projects under the RE Act of 2008 — as of April 30, 2025',
    url: 'https://legacy.doe.gov.ph/renewable-energy?q=renewable-energy/summary-renewable-energy-re-projects-under-re-act-2008-april-30-2025',
    publicationDate: '2025-04-30',
    accessed: '2026-09-08',
    notes: 'Geothermal: 31 commercial projects; installed capacity 1,951.735 MW. Do not publish disputed facility-funding figures from earlier secondary reports.',
  },
}

/**
 * Markets — 15 starting coverage.
 * asiaPacificPriority: true for the nine Asia-Pacific priority markets in this reference.
 * status: published | draft
 */
export const MARKETS = [
  {
    id: 'taiwan',
    name: 'Taiwan',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity', 'heating'],
    overview: [
      'Taiwan maintains geothermal exploration and development regulations dated May 13, 2024.',
      'Activity focuses on electricity and heating applications under MOEA rules.',
    ],
    analysis: [],
    docIds: ['taiwan-regs-2024'],
  },
  {
    id: 'philippines',
    name: 'Philippines',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'The Philippines operates a large conventional geothermal fleet. Department of Energy Key Energy Statistics report 1,952 MW of installed geothermal generating capacity in both 2023 and 2024, with 1,708 MW of dependable capacity and 10,789 GWh of geothermal generation in 2024.',
      'As of April 30, 2025, the Department of Energy\'s renewable-energy project summary lists 31 commercial geothermal projects totaling 1,951.735 MW of installed capacity.',
    ],
    overviewDocIds: ['doe-ph-key-energy-2024', 'doe-ph-re-summary-2025-04'],
    applicationDetail: {
      title: 'Applications and participants',
      body: [
        'Department of Energy summaries present geothermal as a commercial electricity resource under the Renewable Energy Act of 2008. Project counts and installed-capacity totals in those tables are the figures used on this profile.',
      ],
      docIds: ['doe-ph-re-summary-2025-04'],
    },
    analysis: [
      'The Philippines remains a core Asia-Pacific electricity market for geothermal services, plant upgrades, and reservoir support. Capacity figures should be read as nameplate and dependable statistics from DOE tables, not as a project pipeline. Procurement and service opportunities still require project-level notices from operators or contracting agencies.',
    ],
    notes: 'Research record only: earlier secondary reporting conflicts between ₱10.07 billion and ₱10.7 billion facility figures — keep discrepancy out of public narrative until primary documents reconcile.',
    docIds: ['doe-ph-key-energy-2024', 'doe-ph-re-summary-2025-04'],
  },
  {
    id: 'japan',
    name: 'Japan',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity', 'heating'],
    overview: [
      'Japan has a long history with high-temperature fields and direct use.',
      'NEDO\'s next-generation geothermal program lists a ¥110.2 billion budget ceiling, with solicitation opened August 28, 2026.',
    ],
    analysis: [],
    docIds: ['nedo-nextgen-2026'],
  },
  {
    id: 'australia',
    name: 'Australia',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1523482580733-285fcbd5ebe9?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['heating', 'direct-use', 'electricity'],
    overview: [
      'Australia\'s geothermal market includes building heating and cooling, direct heat, and exploration for deeper resources. Geoscience Australia\'s 2026 assessment reports 134 MWth of direct geothermal and ground-source heat-pump capacity in 2025, a 25 percent increase since 2023. It identifies heating and cooling as the sector\'s most mature segment, while most exploration projects remain at an early stage.',
    ],
    overviewDocIds: ['ga-aecr-2026-geothermal'],
    applicationDetail: {
      title: 'Applications and buyers',
      body: [
        'Building owners and institutional operators form a demonstrated customer base. The Australian War Memorial\'s system began operating in October 2024, using vertical boreholes and underground pipework for heating and cooling. Deeper geothermal resources involve a different development model, including enhanced geothermal systems and hot sedimentary aquifers.',
      ],
      docIds: ['ga-aecr-2025-geothermal'],
    },
    analysis: [
      'Building systems offer a practical market for thermal design, installation, controls, and servicing. Deep-resource exploration creates a separate case for drilling and subsurface expertise. Profiles and project listings should keep these applications separate because their buyers, costs, and development stages differ.',
    ],
    docIds: ['ga-aecr-2026-geothermal', 'ga-aecr-2025-geothermal'],
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1537996194471-e785df86c08f?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Indonesia accounts for a large share of global installed geothermal capacity.',
      'Ormat secured an exploration financing facility for Wapsalit that uses Indonesia\'s GREM risk-sharing program.',
    ],
    overviewDocIds: ['ormat-q2-2026'],
    analysis: [],
    docIds: ['ormat-q2-2026'],
  },
  {
    id: 'india',
    name: 'India',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity', 'heating', 'direct-use'],
    overview: [
      'India notified its National Policy on Geothermal Energy in September 2025. The policy covers electricity, district heating, agricultural applications, aquaculture, and ground-source heating and cooling. It also supports enhanced and advanced geothermal systems, geothermal–solar hybrids, and reuse of oil and gas infrastructure. MNRE announced five sanctioned pilot and resource-assessment projects alongside the policy.',
    ],
    overviewDocIds: ['mnre-policy-notice-2025', 'pib-india-geothermal-2025'],
    applicationDetail: {
      title: 'Applications and participants',
      body: [
        'The policy identifies MNRE as the national lead and state nodal agencies as participants in development. It addresses public and private developers, research institutions, and entrepreneurs. Its applications extend from electricity to heating, cooling, and agricultural uses.',
      ],
      docIds: ['mnre-policy-pdf-2025'],
    },
    engagement: {
      title: 'U.S. engagement',
      body: [
        'Geothermal is a documented focus of the U.S.–India Renewable Energy Technology Action Platform, launched in August 2023. A subsequent joint statement describes cooperation through research, pilots, demonstrations, and industry networks.',
      ],
      docIds: ['doe-india-retap'],
    },
    analysis: [
      'Resource assessment, drilling, demonstration design, and thermal-system engineering are relevant areas for U.S. participation. The national policy supplies a concrete basis for engagement; individual contracts depend on project sponsors and their procurement processes.',
    ],
    docIds: ['mnre-policy-notice-2025', 'pib-india-geothermal-2025', 'mnre-policy-pdf-2025', 'doe-india-retap'],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1469521669194-8fea6bc012b0?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity', 'heating', 'direct-use'],
    overview: [
      'New Zealand has long experience with high-temperature fields and direct use at scale.',
      'In March 2026, MBIE released a strategy to expand geothermal electricity and heat use.',
    ],
    overviewDocIds: ['nz-strategy-2026'],
    analysis: [],
    docIds: ['nz-strategy-2026'],
  },
  {
    id: 'papua-new-guinea',
    name: 'Papua New Guinea',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity', 'industrial'],
    overview: [
      'Papua New Guinea has a documented geothermal power history at Lihir. A Mineral Resources Authority presentation hosted by IRENA records 26 MW commissioned in 2003 and an upgrade to 56 MW in 2005. These are historical installation figures, not a statement of current available output.',
    ],
    overviewDocIds: ['mra-png-irena-2015'],
    applicationDetail: {
      title: 'Industry and institutions',
      body: [
        'Newmont identifies Lihir as a wholly owned gold operation following its 2023 acquisition of Newcrest. The mine operates in a geothermally active setting. Separately, the Mineral Resources Authority\'s Geological Survey Division lists geothermal among its energy activities.',
      ],
      docIds: ['newmont-lihir', 'mra-geoscience-energy'],
    },
    analysis: [
      'Lihir makes mining-linked energy a useful starting point for understanding the market. Mine operators and public electricity buyers represent different commercial routes. Resource characterization, reservoir engineering, and energy-system integration are relevant capabilities to assess against a specific sponsor\'s needs.',
    ],
    docIds: ['mra-png-irena-2015', 'newmont-lihir', 'mra-geoscience-energy'],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'asia-pacific',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Thailand has geothermal generation experience at Fang in Chiang Mai Province. EGAT identifies Fang as its geothermal power plant and dates the country\'s first geothermal plant to 1989. EGAT\'s reporting on energy management also includes geothermal among the renewable sources used for generation in 2025.',
    ],
    overviewDocIds: ['egat-alternative', 'egat-energy-mgmt-2025'],
    applicationDetail: {
      title: 'Technology and counterparty',
      body: [
        'EGAT describes a binary process: geothermal water transfers heat to a low-boiling-point working fluid that drives the turbine. EGAT is the identified plant owner and a concrete institutional starting point for technical engagement.',
      ],
      docIds: ['egat-alternative'],
    },
    analysis: [
      'Thailand\'s profile should focus on its demonstrated operating experience and project-specific opportunities in resource assessment, binary systems, and plant services. An operating reference supports technical exchange and supplier research; a purchase opportunity requires a procurement notice or buyer announcement.',
    ],
    docIds: ['egat-alternative', 'egat-energy-mgmt-2025'],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    region: 'africa',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Kenya\'s state-developer model spreads early drilling risk and pairs it with standardized power-purchase terms.',
      'Menengai financing supports a public-steam / private-generation structure.',
    ],
    overviewDocIds: ['afdb-kenya-menengai'],
    analysis: [],
    docIds: ['afdb-kenya-menengai'],
  },
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    region: 'africa',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Ethiopia is central to Rift Valley geothermal development alongside Kenya.',
      'The Tulu Moye project appears in AfDB project records.',
    ],
    overviewDocIds: ['afdb-ethiopia-tulu'],
    analysis: [],
    docIds: ['afdb-ethiopia-tulu'],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    region: 'americas',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Mexico built public and utility-owned geothermal models over decades.',
      'October 2025 implementing regulations update the domestic framework.',
    ],
    analysis: [],
    docIds: ['mexico-regs-2025'],
  },
  {
    id: 'chile',
    name: 'Chile',
    region: 'americas',
    image: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=1200&q=80',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity', 'industrial', 'heating'],
    overview: [
      'Chile\'s Law 21.711 and related guidance address shallow geothermal applications.',
      'Industrial heat and utility electricity can involve different buyers and requirements.',
    ],
    analysis: [],
    docIds: ['chile-law-21711'],
  },
  {
    id: 'el-salvador',
    name: 'El Salvador',
    region: 'americas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity', 'direct-use'],
    overview: [
      'El Salvador has a long-running public geothermal program.',
      'World Bank financing supports Chinameca and direct heat uses.',
    ],
    analysis: [],
    docIds: ['wb-elsalvador-2025'],
  },
  {
    id: 'dominica',
    name: 'Dominica',
    region: 'americas',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Dominica\'s regulator reported commercial geothermal operation beginning July 31, 2026.',
    ],
    analysis: [],
    docIds: ['dominica-irc-2026'],
  },
]

/** Dated developments for homepage feed and country pages. */
export const DEVELOPMENTS = [
  {
    id: 'india-policy-2025',
    marketId: 'india',
    date: '2025-09-17',
    title: 'National geothermal policy notified',
    description: 'India notified its National Policy on Geothermal Energy and announced five sanctioned pilot and resource-assessment projects.',
    type: 'policy',
    application: null,
    docIds: ['pib-india-geothermal-2025', 'mnre-policy-notice-2025'],
  },
  {
    id: 'dominica-cod-2026',
    marketId: 'dominica',
    date: '2026-07-31',
    title: 'Plant enters commercial operation',
    description: 'Dominica\'s regulator reported that geothermal generation entered commercial operation.',
    type: 'project',
    application: 'electricity',
    docIds: ['dominica-irc-2026'],
  },
  {
    id: 'nedo-solicitation-2026',
    marketId: 'japan',
    date: '2026-08-28',
    title: 'Exploration financing program opened',
    description: 'NEDO opened solicitation under its next-generation geothermal program, with a ¥110.2 billion budget ceiling.',
    type: 'financing',
    application: 'electricity',
    docIds: ['nedo-nextgen-2026'],
  },
  {
    id: 'ormat-wapsalit-2026',
    marketId: 'indonesia',
    date: '2026-05-01',
    title: 'Exploration financing signed',
    description: 'Ormat secured an exploration financing facility of up to $40 million for Wapsalit, using Indonesia\'s GREM risk-sharing program.',
    type: 'financing',
    application: 'electricity',
    docIds: ['ormat-q2-2026'],
  },
  {
    id: 'nz-strategy-2026',
    marketId: 'new-zealand',
    date: '2026-03-01',
    title: 'Geothermal strategy released',
    description: 'MBIE released a strategy to expand geothermal electricity and heat use.',
    type: 'policy',
    application: null,
    docIds: ['nz-strategy-2026'],
  },
  {
    id: 'taiwan-regs-2024',
    marketId: 'taiwan',
    date: '2024-05-13',
    title: 'Geothermal rules revised',
    description: 'Taiwan published geothermal exploration and development regulations.',
    type: 'policy',
    application: null,
    docIds: ['taiwan-regs-2024'],
  },
  {
    id: 'mexico-regs-2025',
    marketId: 'mexico',
    date: '2025-10-01',
    title: 'Geothermal rules revised',
    description: 'Mexico issued October 2025 implementing regulations.',
    type: 'policy',
    application: null,
    docIds: ['mexico-regs-2025'],
  },
  {
    id: 'wb-elsalvador-2025',
    marketId: 'el-salvador',
    date: '2025-03-26',
    title: 'Project financing signed',
    description: 'World Bank announced financing for Chinameca and direct heat uses in El Salvador.',
    type: 'financing',
    application: 'electricity',
    docIds: ['wb-elsalvador-2025'],
  },
  {
    id: 'afdb-kenya-menengai',
    marketId: 'kenya',
    date: '2024-01-01',
    title: 'Project financing signed',
    description: 'African Development Bank approved financing tied to Kenya\'s clean energy transition, including Menengai\'s public-steam / private-generation structure.',
    type: 'financing',
    application: 'electricity',
    docIds: ['afdb-kenya-menengai'],
  },
]

export const POLICY_AREAS = [
  { id: 'operating', label: 'Operating guidance', capture: 'Coverage, legal force, publisher, updates, review cycle' },
  { id: 'deadlines', label: 'Decision deadlines', capture: 'Decision covered, clock start, pauses, exceptions, consequences' },
  { id: 'coordination', label: 'Coordination and staffing', capture: 'Responsible agencies, authority, consent requirements, jurisdiction' },
  { id: 'evaluation', label: 'Evaluation', capture: 'What is measured, reporting frequency, recipients, publication, renewal implications' },
  { id: 'environmental', label: 'Environmental review', capture: 'Applicable framework, eligibility, safeguards, geothermal-specific provisions or extensions' },
  { id: 'fiscal', label: 'Fiscal terms', capture: 'Royalties, incentives, cost recovery, spending conditions, expiry dates' },
]

export const DISCLOSURE = 'Not an official U.S. government publication.'

export function marketById(id) {
  return MARKETS.find((m) => m.id === id) || null
}

export function developmentsForMarket(marketId) {
  return DEVELOPMENTS.filter((d) => d.marketId === marketId).sort((a, b) => b.date.localeCompare(a.date))
}

export function publishedMarkets() {
  return MARKETS.filter((m) => m.status === 'published')
}

export function docsFor(ids = []) {
  return ids.map((id) => DOCUMENTS[id]).filter(Boolean)
}

export function formatDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (!d) return `${months[m - 1]} ${y}`
  return `${months[m - 1]} ${d}, ${y}`
}

export function regionLabel(id) {
  return REGIONS.find((r) => r.id === id)?.label || id
}
