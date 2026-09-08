import { useEffect, useMemo, useRef, useState } from 'react'
import {
  DEVELOPMENTS,
  REGIONS,
  APPLICATIONS,
  DEVELOPMENT_TYPES,
  US_ENGAGEMENT,
  US_DOMESTIC,
  POLICY_AREAS,
  DISCLOSURE,
  marketById,
  developmentsForMarket,
  publishedMarkets,
  docsFor,
  formatDate,
  regionLabel,
} from './content/geothermal.js'

const HERO_IMAGES = [
  '/mosaic-1.jpg',
  '/mosaic-2.jpg',
  '/mosaic-3.jpg',
  '/mosaic-4.jpg',
  '/mosaic-5.jpg',
  '/mosaic-6.jpg',
]

const HOME_GUIDE = [
  {
    id: 'markets',
    path: '/geothermal/markets',
    kicker: 'Markets',
    title: 'Country profiles',
    lede: 'Browse geothermal markets by region and application—electricity, heating, industrial heat, and direct use.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
  },
  {
    id: 'developments',
    path: '/geothermal/developments',
    kicker: 'Feed',
    title: 'Recent developments',
    lede: 'Dated changes to laws, financing facilities, project milestones, and procurement notices.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'policy',
    path: '/geothermal/policy-financing',
    kicker: 'Rules',
    title: 'Policy and financing',
    lede: 'Compare the instruments that shape development across markets—without empty comparison panels.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'engagement',
    path: '/geothermal/us-engagement',
    kicker: 'United States',
    title: 'U.S. international engagement',
    lede: 'Existing authorities and proposed programs for U.S. participation in overseas geothermal markets.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
  },
  {
    id: 'domestic',
    path: '/geothermal/us-domestic',
    kicker: 'United States',
    title: 'U.S. domestic context',
    lede: 'Proposed legislation and agency testimony that frame domestic geothermal policy.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    id: 'methodology',
    path: '/geothermal/methodology',
    kicker: 'About',
    title: 'Methodology',
    lede: 'How this reference sources claims, separates analysis, and chooses which markets to cover.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

const REGION_IMAGES = {
  'asia-pacific': 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
  africa: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
  americas: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
}

const NAV = [
  { id: 'home', path: '/geothermal', label: 'Overview' },
  { id: 'markets', path: '/geothermal/markets', label: 'Markets' },
  { id: 'developments', path: '/geothermal/developments', label: 'Recent developments' },
  { id: 'policy', path: '/geothermal/policy-financing', label: 'Policy & financing' },
  { id: 'engagement', path: '/geothermal/us-engagement', label: 'U.S. engagement' },
  { id: 'domestic', path: '/geothermal/us-domestic', label: 'U.S. domestic' },
  { id: 'methodology', path: '/geothermal/methodology', label: 'Methodology' },
]

export function parseGeothermalPath(pathname) {
  const path = (pathname || '/').replace(/\/+$/, '') || '/'
  if (path === '/geothermal') return { view: 'home', slug: null }
  if (path === '/geothermal/markets') return { view: 'markets', slug: null }
  if (path.startsWith('/geothermal/markets/')) {
    return { view: 'country', slug: path.slice('/geothermal/markets/'.length) }
  }
  if (path === '/geothermal/developments') return { view: 'developments', slug: null }
  if (path === '/geothermal/policy-financing') return { view: 'policy', slug: null }
  if (path === '/geothermal/us-engagement') return { view: 'engagement', slug: null }
  if (path === '/geothermal/us-domestic') return { view: 'domestic', slug: null }
  if (path === '/geothermal/methodology') return { view: 'methodology', slug: null }
  if (path === '/subsurface') return { view: 'home', slug: null } // legacy redirect
  return null
}

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, shown]
}

function SourceList({ docIds }) {
  const docs = docsFor(docIds)
  if (!docs.length) return null
  return (
    <ul className="geo-sources">
      {docs.map((doc) => (
        <li key={doc.id}>
          <a href={doc.url} target="_blank" rel="noopener noreferrer">
            {doc.title} ↗
          </a>
          {doc.publicationDate && (
            <span className="geo-meta"> · {formatDate(doc.publicationDate)}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

function HeroMosaic({ images }) {
  if (!images?.length) return null
  return (
    <>
      <div className="geo-hero-mosaic" aria-hidden="true">
        {images.slice(0, 6).map((src, i) => (
          <div key={src} className="geo-hero-tile" style={{ '--hero-i': i }}>
            <img src={src} alt="" loading="eager" decoding="async" />
          </div>
        ))}
      </div>
      <div className="geo-hero-vignette" aria-hidden="true" />
    </>
  )
}

function GuideCard({ item, index, navigate }) {
  const [ref, shown] = useReveal(0.08)
  return (
    <a
      ref={ref}
      href={item.path}
      className={`geo-guide-card editorial-panel editorial-shimmer home-door-card group${shown ? ' is-shown' : ''}`}
      style={{ animationDelay: `${index * 70}ms`, '--door-i': index }}
      onClick={(e) => {
        e.preventDefault()
        navigate(item.path)
      }}
    >
      <div className="geo-guide-media">
        <img src={item.image} alt="" loading="lazy" decoding="async" />
        <div className="geo-guide-media-shade" />
      </div>
      <div className="geo-guide-body">
        <div className="editorial-kicker">{item.kicker}</div>
        <h2>{item.title}</h2>
        <p>{item.lede}</p>
        <span className="geo-guide-arrow">Read →</span>
      </div>
    </a>
  )
}

function MarketCard({ market, index, navigate }) {
  const [ref, shown] = useReveal(0.08)
  const image = REGION_IMAGES[market.region] || REGION_IMAGES['asia-pacific']
  return (
    <button
      ref={ref}
      type="button"
      className={`geo-market-card editorial-panel editorial-shimmer home-door-card group${shown ? ' is-shown' : ''}`}
      style={{ animationDelay: `${index * 55}ms`, '--door-i': index }}
      onClick={() => navigate(`/geothermal/markets/${market.id}`)}
    >
      <div className="geo-market-card-media">
        <img src={image} alt="" loading="lazy" decoding="async" />
        <div className="geo-guide-media-shade" />
      </div>
      <div className="geo-market-card-body">
        <span className="geo-market-name">
          {market.name}
          {market.asiaPacificPriority && <span className="geo-badge geo-badge-soft">S. 4610</span>}
        </span>
        <span className="geo-market-apps">
          {market.applications.map((a) => APPLICATIONS.find((x) => x.id === a)?.label).filter(Boolean).join(' · ')}
        </span>
        <span className="geo-guide-arrow">Open profile →</span>
      </div>
    </button>
  )
}

function ProgramSwitcher({ programs, value, onChange, onHome }) {
  const [open, setOpen] = useState(false)
  const current = programs.find((p) => p.id === value)

  useEffect(() => {
    if (!open) return undefined
    const onDoc = (e) => {
      if (!e.target.closest('.program-switch')) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [open])

  return (
    <div className={`program-switch${open ? ' program-switch-open' : ''}`}>
      <button
        type="button"
        className="program-switch-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="program-switch-label">Energy program</span>
        <span className="program-switch-value">{current?.label ?? 'Choose'}</span>
        <span className="program-switch-caret" aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="program-switch-menu" role="listbox">
          {programs.map((program) => (
            <li key={program.id} role="option" aria-selected={program.id === value}>
              <button
                type="button"
                className={`program-switch-item${program.id === value ? ' is-active' : ''}${program.status === 'soon' ? ' is-soon' : ''}`}
                onClick={() => {
                  setOpen(false)
                  if (program.status === 'live') onChange(program.id)
                }}
              >
                <span>{program.label}</span>
                {program.status === 'soon' && <span className="program-soon">Coming soon</span>}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="program-switch-item program-switch-home"
              onClick={() => {
                setOpen(false)
                onHome()
              }}
            >
              ← All programs
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

function Header({ route, navigate, programs, onProgram, onHome }) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <a
          className="app-brand"
          href="/geothermal"
          onClick={(e) => {
            e.preventDefault()
            navigate('/geothermal')
          }}
        >
          <img src="/logo.png" width="256" height="256" alt="" />
          <span>
            <strong>MDEV</strong>
            <em>Geothermal</em>
          </span>
        </a>
        <nav className="app-nav" aria-label="Geothermal sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={route.view === item.id || (item.id === 'markets' && route.view === 'country') ? 'is-active' : undefined}
              onClick={(e) => {
                e.preventDefault()
                navigate(item.path)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <label className="app-nav-mobile">
          <span className="sr-only">Section</span>
          <select
            value={NAV.find((n) => n.id === route.view || (n.id === 'markets' && route.view === 'country'))?.path || '/geothermal'}
            onChange={(e) => navigate(e.target.value)}
          >
            {NAV.map((item) => (
              <option key={item.id} value={item.path}>{item.label}</option>
            ))}
          </select>
        </label>
        <ProgramSwitcher
          programs={programs}
          value="geothermal"
          onChange={onProgram}
          onHome={onHome}
        />
      </div>
    </header>
  )
}

function Footer({ onHome }) {
  return (
    <footer className="app-footer geo-footer">
      <div>
        <p>Thermal Underground © Adler Archer.</p>
        <p className="geo-meta disclosure-glow">{DISCLOSURE}</p>
      </div>
      <button type="button" className="back-link" onClick={onHome}>
        ← Change energy program
      </button>
    </footer>
  )
}

function HomePage({ navigate }) {
  const recent = [...DEVELOPMENTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6)
  const [feedRef, feedShown] = useReveal(0.1)

  return (
    <>
      <section className="geo-entry-hero">
        <HeroMosaic images={HERO_IMAGES} />
        <div className="geo-entry-hero-inner">
          <p className="app-kicker rise d2">International · Geothermal</p>
          <h1 className="rise d3">
            <span className="geo-entry-title-line">International</span>
            <span className="geo-entry-title-accent">Geothermal Markets</span>
          </h1>
          <span className="geo-entry-rule rise d4" aria-hidden="true" />
          <p className="app-lede rise d5">
            Explore geothermal projects, policy, and financing around the world. Country profiles connect electricity, heating, and industrial applications with buyers, development requirements, and U.S. capabilities.
          </p>
          <div className="app-cta-row rise d6">
            <a
              href="/geothermal/markets"
              className="app-cta"
              onClick={(e) => {
                e.preventDefault()
                navigate('/geothermal/markets')
              }}
            >
              Browse markets
            </a>
            <a
              href="/geothermal/developments"
              className="app-cta-ghost"
              onClick={(e) => {
                e.preventDefault()
                navigate('/geothermal/developments')
              }}
            >
              Recent developments →
            </a>
          </div>
        </div>
      </section>

      <section className="app-section geo-guide-section">
        <div className="app-section-inner">
          <div className="geo-guide-head">
            <div className="editorial-kicker">Field guide</div>
            <h2>What’s on this site</h2>
            <hr className="editorial-rule" />
            <p>
              Country markets, dated developments, policy instruments, and U.S. engagement—organized so you can see where technology and services fit overseas.
            </p>
          </div>
          <div className="geo-guide-grid">
            {HOME_GUIDE.map((item, i) => (
              <GuideCard key={item.id} item={item} index={i} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="app-section">
        <div className="app-section-inner">
          <p className="app-kicker">Feed</p>
          <h2 className="geo-section-title">Recent developments</h2>
          <ul className={`geo-feed geo-feed-cards${feedShown ? ' is-shown' : ''}`} ref={feedRef}>
            {recent.map((item, i) => {
              const market = marketById(item.marketId)
              const doc = docsFor(item.docIds)[0]
              return (
                <li
                  key={item.id}
                  className="geo-feed-card editorial-panel"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="geo-feed-meta">
                    <span>{market?.name}</span>
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {doc && (
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="geo-inline-link">
                      Source ↗
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

function MarketsPage({ navigate }) {
  const [region, setRegion] = useState('all')
  const [application, setApplication] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return publishedMarkets().filter((m) => {
      if (region !== 'all' && m.region !== region) return false
      if (application !== 'all' && !m.applications.includes(application)) return false
      if (q) {
        const hay = `${m.name} ${m.overview.join(' ')} ${(m.analysis || []).join(' ')} ${m.applicationDetail?.body?.join(' ') || ''} ${m.engagement?.body?.join(' ') || ''}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [region, application, query])

  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <p className="app-kicker">Markets</p>
        <h1 className="geo-page-title">Country profiles</h1>
        <p className="app-lede geo-page-lede">
          Fifteen starting markets across Asia and Pacific, Africa, and the Americas. Profiles link applications, buyers, and sourced developments.
        </p>

        <div className="geo-filters">
          <label>
            <span>Search</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Countries, projects, organizations…"
            />
          </label>
          <label>
            <span>Region</span>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="all">All regions</option>
              {REGIONS.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Application</span>
            <select value={application} onChange={(e) => setApplication(e.target.value)}>
              <option value="all">All applications</option>
              {APPLICATIONS.map((a) => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </label>
        </div>

        {REGIONS.map((r) => {
          const markets = filtered.filter((m) => m.region === r.id)
          if (!markets.length) return null
          return (
            <div key={r.id} className="geo-region-block">
              <h2>{r.label}</h2>
              <div className="geo-market-card-grid">
                {markets.map((m, i) => (
                  <MarketCard key={m.id} market={m} index={i} navigate={navigate} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function CountryPage({ slug, navigate }) {
  const market = marketById(slug)
  if (!market) {
    return (
      <section className="app-section app-section-top">
        <div className="app-section-inner">
          <h1 className="geo-page-title">Market not found</h1>
          <button type="button" className="back-link" onClick={() => navigate('/geothermal/markets')}>
            ← Markets
          </button>
        </div>
      </section>
    )
  }

  const developments = developmentsForMarket(market.id)

  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <button type="button" className="back-link" onClick={() => navigate('/geothermal/markets')}>
          ← Markets
        </button>
        <p className="app-kicker">{regionLabel(market.region)}</p>
        <h1 className="geo-page-title">
          {market.name}
          {market.status === 'draft' && <span className="geo-badge">Draft</span>}
        </h1>
        <p className="geo-market-apps">
          {market.applications.map((a) => APPLICATIONS.find((x) => x.id === a)?.label).filter(Boolean).join(' · ')}
        </p>

        {market.status === 'draft' && (
          <p className="geo-draft-note">
            This profile is in draft. {market.notes || 'Additional sourced content is required before publication.'}
          </p>
        )}

        {market.overview?.length > 0 && (
          <div className="geo-prose">
            <h2>Overview</h2>
            {market.overview.map((p) => <p key={p}>{p}</p>)}
            <SourceList docIds={market.overviewDocIds || market.docIds} />
          </div>
        )}

        {market.applicationDetail && (
          <div className="geo-prose">
            <h2>{market.applicationDetail.title}</h2>
            {market.applicationDetail.body.map((p) => <p key={p}>{p}</p>)}
            <SourceList docIds={market.applicationDetail.docIds} />
          </div>
        )}

        {market.engagement && (
          <div className="geo-prose">
            <h2>{market.engagement.title}</h2>
            {market.engagement.body.map((p) => <p key={p}>{p}</p>)}
            <SourceList docIds={market.engagement.docIds} />
          </div>
        )}

        {developments.length > 0 && (
          <div className="geo-prose">
            <h2>Recent developments</h2>
            <ul className="geo-feed">
              {developments.map((item) => {
                const doc = docsFor(item.docIds)[0]
                return (
                  <li key={item.id}>
                    <div className="geo-feed-meta">
                      <span>{formatDate(item.date)}</span>
                      <span>{DEVELOPMENT_TYPES.find((t) => t.id === item.type)?.label}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {doc && (
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" className="geo-inline-link">
                        Source ↗
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {market.policyDetail && (
          <div className="geo-prose">
            <h2>{market.policyDetail.title || 'Policy and financing'}</h2>
            {market.policyDetail.body.map((p) => <p key={p}>{p}</p>)}
            <SourceList docIds={market.policyDetail.docIds} />
          </div>
        )}

        {market.analysis?.length > 0 && (
          <div className="geo-prose geo-analysis">
            <h2>Analysis</h2>
            {market.analysis.map((p) => <p key={p}>{p}</p>)}
          </div>
        )}
      </div>
    </section>
  )
}

function DevelopmentsPage() {
  const [region, setRegion] = useState('all')
  const [type, setType] = useState('all')
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...DEVELOPMENTS]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((d) => {
        const market = marketById(d.marketId)
        if (region !== 'all' && market?.region !== region) return false
        if (type !== 'all' && d.type !== type) return false
        if (q) {
          const hay = `${market?.name || ''} ${d.title} ${d.description}`.toLowerCase()
          if (!hay.includes(q)) return false
        }
        return true
      })
  }, [region, type, query])

  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <p className="app-kicker">Feed</p>
        <h1 className="geo-page-title">Recent developments</h1>
        <p className="app-lede geo-page-lede">
          Dated changes to laws, financing, projects, and procurement. Announced targets are distinguished from achieved results in the description.
        </p>
        <div className="geo-filters">
          <label>
            <span>Search</span>
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Countries, projects, legislation…" />
          </label>
          <label>
            <span>Region</span>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="all">All regions</option>
              {REGIONS.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
            </select>
          </label>
          <label>
            <span>Development type</span>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="all">All types</option>
              {DEVELOPMENT_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </label>
        </div>
        <ul className="geo-feed">
          {items.map((item) => {
            const market = marketById(item.marketId)
            const doc = docsFor(item.docIds)[0]
            return (
              <li key={item.id}>
                <div className="geo-feed-meta">
                  <span>{market?.name}</span>
                  <span>{formatDate(item.date)}</span>
                  <span>{DEVELOPMENT_TYPES.find((t) => t.id === item.type)?.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {doc && (
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="geo-inline-link">
                    Source ↗
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function PolicyPage() {
  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <p className="app-kicker">Comparison</p>
        <h1 className="geo-page-title">Policy and financing</h1>
        <p className="app-lede geo-page-lede">
          Six comparison areas support cross-market reading. Show provisions relevant to each market rather than empty panels. The U.S. framework is one example, not a scoring standard.
        </p>
        <ul className="geo-policy-keys geo-policy-keys-lg">
          {POLICY_AREAS.map((area) => (
            <li key={area.id}>
              <strong>{area.label}</strong>
              <span>{area.capture}</span>
            </li>
          ))}
        </ul>
        <p className="geo-draft-note">
          Market-specific provisions will populate as country profiles gain sourced policy entries. Start from published country pages and linked documents.
        </p>
        <p className="geo-meta">{publishedMarkets().length} published markets currently available for comparison.</p>
      </div>
    </section>
  )
}

function EngagementPage() {
  const page = US_ENGAGEMENT
  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <p className="app-kicker">United States</p>
        <h1 className="geo-page-title">{page.title}</h1>
        <p className="app-lede geo-page-lede">{page.lede}</p>

        <div className="geo-prose">
          <h2>Coverage note</h2>
          <p>{page.coverageNote}</p>
        </div>

        <div className="geo-prose">
          <h2>{page.existing.title}</h2>
          {page.existing.body.map((p) => <p key={p}>{p}</p>)}
          <SourceList docIds={page.existing.docIds} />
        </div>

        <div className="geo-prose">
          <h2>{page.proposed.title}</h2>
          <p className="geo-status">
            {page.proposed.statusLabel}
            <span> · Status checked {formatDate(page.proposed.statusChecked)}</span>
          </p>
          {page.proposed.body.map((p) => <p key={p}>{p}</p>)}
          <SourceList docIds={page.proposed.docIds} />
        </div>
      </div>
    </section>
  )
}

function DomesticPage() {
  const page = US_DOMESTIC
  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <p className="app-kicker">United States</p>
        <h1 className="geo-page-title">{page.title}</h1>
        <p className="app-lede geo-page-lede">{page.lede}</p>

        <div className="geo-prose">
          <h2>{page.bill.title}</h2>
          <p className="geo-status">{page.bill.statusLabel}</p>
          <p>{page.bill.note}</p>
          <ul className="geo-bill-sections">
            {page.bill.sections.map((s) => (
              <li key={s.num}>
                <strong>{s.num}</strong>
                <span>{s.subject}</span>
              </li>
            ))}
          </ul>
          <SourceList docIds={page.bill.docIds} />
        </div>

        <div className="geo-prose">
          <h2>{page.testimony.title}</h2>
          <p className="geo-status">{formatDate(page.testimony.date)}</p>
          {page.testimony.body.map((p) => <p key={p}>{p}</p>)}
          <SourceList docIds={page.testimony.docIds} />
        </div>
      </div>
    </section>
  )
}

function MethodologyPage() {
  return (
    <section className="app-section app-section-top">
      <div className="app-section-inner">
        <p className="app-kicker">About this reference</p>
        <h1 className="geo-page-title">Methodology</h1>
        <div className="geo-prose">
          <h2>Coverage</h2>
          <p>
            The site starts with 15 markets. Nine Asia-Pacific markets appear in the engagement provision of the July 27, 2026 reported version of S. 4610. Six others are editorial selections. Canada, Colombia, Costa Rica, Poland, and Türkiye remain in an internal expansion backlog until profiles are ready.
          </p>
          <h2>Sourcing</h2>
          <p>
            Document, claim, and legislative-action records are kept separately and linked by identifiers. Public pages show concise citations. Research history and failed fetches belong in underlying records, not the main narrative.
          </p>
          <h2>Versions</h2>
          <p>
            An action record establishes an action. A text version establishes wording. Bill summaries use the version named on the page, with a status-checked date.
          </p>
          <h2>Analysis</h2>
          <p>
            Substantive editorial conclusions are labeled Analysis. Ordinary factual paragraphs do not carry repeated source-establishes headings. Unsupported fields are omitted from public pages.
          </p>
          <p className="geo-draft-note">{DISCLOSURE}</p>
        </div>
      </div>
    </section>
  )
}

export default function GeothermalApp({ programs, onHome, onProgram }) {
  const [route, setRoute] = useState(() => parseGeothermalPath(window.location.pathname) || { view: 'home', slug: null })

  useEffect(() => {
    const onPop = () => {
      const next = parseGeothermalPath(window.location.pathname)
      if (next) setRoute(next)
      else onHome()
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [onHome])

  const navigate = (path) => {
    const target = path === '/subsurface' ? '/geothermal' : path
    window.history.pushState({}, '', target)
    const next = parseGeothermalPath(target)
    if (next) {
      setRoute(next)
      window.scrollTo(0, 0)
    }
  }

  let body = null
  switch (route.view) {
    case 'markets':
      body = <MarketsPage navigate={navigate} />
      break
    case 'country':
      body = <CountryPage slug={route.slug} navigate={navigate} />
      break
    case 'developments':
      body = <DevelopmentsPage />
      break
    case 'policy':
      body = <PolicyPage />
      break
    case 'engagement':
      body = <EngagementPage />
      break
    case 'domestic':
      body = <DomesticPage />
      break
    case 'methodology':
      body = <MethodologyPage />
      break
    default:
      body = <HomePage navigate={navigate} />
  }

  return (
    <div className="app-shell">
      <Header
        route={route}
        navigate={navigate}
        programs={programs}
        onProgram={onProgram}
        onHome={onHome}
      />
      <main>{body}</main>
      <Footer onHome={onHome} />
    </div>
  )
}
