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
  's4610-rs': {
    id: 's4610-rs',
    issuer: 'U.S. Congress',
    title: 'S. 4610, Pacific POWER Act — reported version',
    identifier: 'BILLS-119s4610rs',
    url: 'https://www.govinfo.gov/app/details/BILLS-119s4610rs',
    textUrl: 'https://www.govinfo.gov/content/pkg/BILLS-119s4610rs/html/BILLS-119s4610rs.htm',
    version: 'Reported in Senate',
    publicationDate: '2026-07-27',
    legalStatus: 'Proposed legislation',
    notes: 'Use reported version for proposal description. Introduced version belongs in version history. Research tools had different retrieval results; preserve access history in this record.',
  },
  'hr5631-eh': {
    id: 'hr5631-eh',
    issuer: 'U.S. Congress',
    title: 'H.R. 5631, Geothermal Energy Advancement Act — House-engrossed',
    identifier: 'BILLS-119hr5631eh',
    url: 'https://www.govinfo.gov/app/details/BILLS-119hr5631eh',
    version: 'Engrossed in House',
    publicationDate: '2026-06-02',
    legalStatus: 'Proposed legislation',
    notes: 'Describe provisions as proposals unless subsequent enactment is verified.',
  },
  'blm-raby-2025-12': {
    id: 'blm-raby-2025-12',
    issuer: 'U.S. Bureau of Land Management',
    title: 'Jon Raby testimony — House Natural Resources legislative hearing',
    url: 'https://www.blm.gov/sites/default/files/docs/2025-12/BLM_Testimony_12-16-25_HNR_EMR_Legislative_Hearing.pdf',
    publicationDate: '2025-12-16',
    notes: 'Agency input on earlier hearing bills. Keep distinct from later H.R. 5631 text. Recommended broader surface-agency participation and incorporating geothermal into the Gold Book.',
  },
  'usc-17203': {
    id: 'usc-17203',
    issuer: 'United States Code',
    title: '42 U.S.C. § 17203 — international geothermal collaboration',
    identifier: '42 U.S.C. 17203',
    url: 'https://www.law.cornell.edu/uscode/text/42/17203',
    legalStatus: 'Existing authority',
    notes: 'Addresses international collaboration on geothermal RD&D and USTDA participation in feasibility and resource-assessment support. Scope of authority does not imply automatic funding.',
  },
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
}

/**
 * Markets — 15 starting coverage.
 * asiaPacificPriority: true for the nine listed in S. 4610 engagement provision.
 * status: published | draft
 */
export const MARKETS = [
  {
    id: 'taiwan',
    name: 'Taiwan',
    region: 'asia-pacific',
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
    asiaPacificPriority: true,
    status: 'draft',
    applications: ['electricity'],
    overview: [
      'The Philippines operates one of the largest conventional geothermal fleets globally.',
    ],
    analysis: [],
    notes: 'Obtain facility approval or implementing documents before publishing an amount, application count, or availability date. Earlier reporting conflicts between ₱10.07 billion and ₱10.7 billion — keep discrepancy in research record.',
    docIds: [],
  },
  {
    id: 'japan',
    name: 'Japan',
    region: 'asia-pacific',
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
    asiaPacificPriority: true,
    status: 'draft',
    applications: ['electricity', 'heating'],
    overview: [],
    analysis: [],
    notes: 'Needs further source gathering before publication.',
    docIds: [],
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    region: 'asia-pacific',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Indonesia accounts for a large share of global installed geothermal capacity.',
      'Ormat secured an exploration financing facility for Wapsalit that uses Indonesia\'s GREM risk-sharing program.',
    ],
    analysis: [],
    docIds: ['ormat-q2-2026'],
  },
  {
    id: 'india',
    name: 'India',
    region: 'asia-pacific',
    asiaPacificPriority: true,
    status: 'draft',
    applications: ['electricity', 'heating'],
    overview: [],
    analysis: [],
    notes: 'Needs further source gathering before publication.',
    docIds: [],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    region: 'asia-pacific',
    asiaPacificPriority: true,
    status: 'published',
    applications: ['electricity', 'heating', 'direct-use'],
    overview: [
      'New Zealand has long experience with high-temperature fields and direct use at scale.',
      'In March 2026, MBIE released a strategy to expand geothermal electricity and heat use.',
    ],
    analysis: [],
    docIds: ['nz-strategy-2026'],
  },
  {
    id: 'papua-new-guinea',
    name: 'Papua New Guinea',
    region: 'asia-pacific',
    asiaPacificPriority: true,
    status: 'draft',
    applications: ['electricity'],
    overview: [],
    analysis: [],
    notes: 'Needs further source gathering before publication.',
    docIds: [],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'asia-pacific',
    asiaPacificPriority: true,
    status: 'draft',
    applications: ['electricity', 'heating'],
    overview: [],
    analysis: [],
    notes: 'Needs further source gathering before publication.',
    docIds: [],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    region: 'africa',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Kenya\'s state-developer model spreads early drilling risk and pairs it with standardized power-purchase terms.',
      'Menengai financing supports a public-steam / private-generation structure.',
    ],
    analysis: [],
    docIds: ['afdb-kenya-menengai'],
  },
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    region: 'africa',
    asiaPacificPriority: false,
    status: 'published',
    applications: ['electricity'],
    overview: [
      'Ethiopia is central to Rift Valley geothermal development alongside Kenya.',
      'The Tulu Moye project appears in AfDB project records; confirm current implementation status.',
    ],
    analysis: [],
    docIds: ['afdb-ethiopia-tulu'],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    region: 'americas',
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

/** Expansion backlog — not shown as a public deferred list. */
export const EXPANSION_BACKLOG = ['Canada', 'Colombia', 'Costa Rica', 'Poland', 'Türkiye']

/** Dated developments for homepage feed and country pages. */
export const DEVELOPMENTS = [
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

export const US_ENGAGEMENT = {
  title: 'U.S. international engagement',
  lede: 'Existing authority and proposed legislation for U.S. engagement in international geothermal markets.',
  coverageNote: 'The nine Asia-Pacific markets in this reference—Taiwan, Philippines, Japan, Australia, Indonesia, India, New Zealand, Papua New Guinea, and Thailand—appear in the engagement provision of the July 27, 2026 reported version of S. 4610. Kenya, Ethiopia, Mexico, Chile, El Salvador, and Dominica are editorial selections for this site.',
  existing: {
    title: 'Existing authority',
    body: [
      '42 U.S.C. § 17203 addresses international collaboration on geothermal research, development, and demonstration, and USTDA participation in feasibility and resource-assessment support.',
      'This page describes the scope of the authority. It does not imply that funding or project support is automatically available.',
    ],
    docIds: ['usc-17203'],
  },
  proposed: {
    title: 'Pacific POWER Act (S. 4610)',
    statusChecked: '2026-09-08',
    statusLabel: 'Reported in Senate · July 27, 2026',
    body: [
      'Use the reported version of S. 4610, dated July 27, 2026, for the proposal\'s description. The introduced version belongs in its version history.',
      'Relevant provisions include prioritized engagement, a global assessment, partner selection, permitting assistance, and coordination between State and DOE.',
    ],
    docIds: ['s4610-rs'],
  },
}

export const US_DOMESTIC = {
  title: 'U.S. domestic policy',
  lede: 'Domestic developments relevant to geothermal practice and international comparison.',
  bill: {
    title: 'H.R. 5631, Geothermal Energy Advancement Act',
    statusLabel: 'House-engrossed · June 2, 2026',
    note: 'Provisions below are proposals unless subsequent enactment is verified.',
    sections: [
      { num: '§2', subject: 'Decisions on covered applications within 60 days after applicable legal requirements are completed, subject to the stated court-relief exception. The deadline covers the final decision stage; it is not a total permitting duration.' },
      { num: '§3', subject: 'Cost recovery for leasing, permitting, and inspections through September 30, 2033, with conditions on collection and spending.' },
      { num: '§4', subject: 'Evaluation of the cost-recovery changes within five years.' },
      { num: '§5', subject: 'Update and rename the existing Gold Book to incorporate geothermal guidance.' },
      { num: '§6', subject: 'Ombudsman, conditional staffing support, coordination, and annual evaluation of permit processing. Staffing provisions require approvals and preserve underlying jurisdiction.' },
      { num: '§7', subject: 'Reduced-royalty period tied to each facility\'s in-service date, with a shared-turbine qualification.' },
      { num: '§8', subject: 'Extension of the specified section 390 environmental-review framework to geothermal.' },
    ],
    docIds: ['hr5631-eh'],
  },
  testimony: {
    title: 'BLM testimony (Jon Raby)',
    date: '2025-12-16',
    body: [
      'Jon Raby\'s December 16, 2025 BLM testimony is agency input on earlier hearing bills. It recommended broader surface-agency participation and incorporating geothermal into the existing Gold Book.',
      'Keep that testimony distinct from the later H.R. 5631 text.',
    ],
    docIds: ['blm-raby-2025-12'],
  },
}

export const POLICY_AREAS = [
  { id: 'operating', label: 'Operating guidance', capture: 'Coverage, legal force, publisher, updates, review cycle' },
  { id: 'deadlines', label: 'Decision deadlines', capture: 'Decision covered, clock start, pauses, exceptions, consequences' },
  { id: 'coordination', label: 'Coordination and staffing', capture: 'Responsible agencies, authority, consent requirements, jurisdiction' },
  { id: 'evaluation', label: 'Evaluation', capture: 'What is measured, reporting frequency, recipients, publication, renewal implications' },
  { id: 'environmental', label: 'Environmental review', capture: 'Applicable framework, eligibility, safeguards, geothermal-specific provisions or extensions' },
  { id: 'fiscal', label: 'Fiscal terms', capture: 'Royalties, incentives, cost recovery, spending conditions, expiry dates' },
]

export const DISCLOSURE = 'An independent reference based on public sources. Not an official U.S. government publication.'

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
