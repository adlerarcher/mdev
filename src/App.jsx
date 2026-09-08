import { useEffect, useState } from 'react'

const NAV = [
  { id: 'markets', label: 'Markets' },
  { id: 'partners', label: 'Partners' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'resources', label: 'Resources' },
]

const SECTIONS = [
  {
    id: 'markets',
    kicker: '01 · Markets',
    title: 'Where geothermal markets are forming',
    body: 'Regional demand, offtake models, and the policy conditions that turn resource potential into bankable projects. Content for this section is coming next.',
  },
  {
    id: 'partners',
    kicker: '02 · Partners',
    title: 'Who builds the market together',
    body: 'Developers, utilities, DFIs, governments, and industry networks that move international geothermal from pilot to fleet. Partner map forthcoming.',
  },
  {
    id: 'pipeline',
    kicker: '03 · Pipeline',
    title: 'Projects on the path to operation',
    body: 'A working view of international development stages—from prospecting and financing through construction and first power. Pipeline entries forthcoming.',
  },
  {
    id: 'resources',
    kicker: '04 · Resources',
    title: 'Tools and references for market work',
    body: 'Reports, data portals, and frameworks used in international geothermal market development. Resource list forthcoming.',
  },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Nav({ activeId, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-[#0c1210]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            onNavigate?.(null)
            setOpen(false)
          }}
        >
          MDEV
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={activeId === item.id ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(item.id)
                onNavigate?.(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-link md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/[0.06] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                aria-current={activeId === item.id ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(item.id)
                  onNavigate?.(item.id)
                  setOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-field" aria-hidden="true">
        <div className="hero-field__orb" />
        <div className="hero-field__grid" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl animate-fadeIn">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--accent)]">
          International market development
        </p>
        <h1 className="mt-5 font-display text-[clamp(3.5rem,12vw,8.5rem)] font-normal leading-[0.88] tracking-[-0.02em] text-[var(--ink)]">
          MDEV
        </h1>
        <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-[var(--ink-muted)] md:text-xl">
          Building the international markets where geothermal moves from resource to revenue.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#markets"
            className="inline-flex items-center bg-[var(--accent)] px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--bg-deep)] transition hover:bg-[#e0b56e]"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('markets')
            }}
          >
            Explore markets
          </a>
          <a
            href="https://thermalunderground.org"
            className="inline-flex items-center px-2 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--ink-muted)] transition hover:text-[var(--accent)]"
          >
            Thermal Underground →
          </a>
        </div>
      </div>
    </section>
  )
}

function PlaceholderSection({ section, index }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-28"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mx-auto max-w-6xl animate-rise">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent)]">
          {section.kicker}
        </p>
        <hr className="section-rule mt-5 max-w-xs" />
        <h2 className="mt-8 max-w-2xl font-display text-[2rem] font-normal leading-tight tracking-tight text-[var(--ink)] md:text-[2.75rem]">
          {section.title}
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {section.body}
        </p>
        <p className="mt-10 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/25">
          Placeholder · content forthcoming
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">MDEV</div>
          <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-[var(--ink-muted)]">
            International market development companion to{' '}
            <a href="https://thermalunderground.org" className="text-[var(--accent)] hover:underline">
              The Thermal Underground
            </a>
            .
          </p>
        </div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/30">
          mdev.thermalunderground.org
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const ids = NAV.map((n) => n.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="grain relative min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Nav activeId={activeId} onNavigate={setActiveId} />
      <main>
        <Hero />
        {SECTIONS.map((section, index) => (
          <PlaceholderSection key={section.id} section={section} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
