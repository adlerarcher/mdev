import { useEffect, useRef, useState } from 'react'

const SECTORS = [
  {
    id: 'subsurface',
    label: 'Subsurface energy',
    title: 'Subsurface energy',
    lede: 'International market development for geothermal and related subsurface resources—where projects, partners, and offtake come together.',
  },
  {
    id: 'nuclear',
    label: 'Nuclear',
    title: 'Nuclear',
    lede: 'Market pathways for nuclear deployment abroad: financing structures, supply chains, and partner ecosystems. Content forthcoming.',
  },
  {
    id: 'critical-materials',
    label: 'Critical materials',
    title: 'Critical materials',
    lede: 'Markets and partnerships around critical minerals and materials that enable the energy transition. Content forthcoming.',
  },
]

const MOSAIC = [
  { src: '/mosaic-1.jpg', className: 'tile wide' },
  { src: '/mosaic-2.jpg', className: 'tile' },
  { src: '/mosaic-3.jpg', className: 'tile portrait' },
  { src: '/mosaic-4.jpg', className: 'tile' },
  { src: '/mosaic-5.jpg', className: 'tile' },
  { src: '/mosaic-6.jpg', className: 'tile' },
  { src: '/mosaic-7.jpg', className: 'tile wide' },
  { src: '/mosaic-8.jpg', className: 'tile' },
]

function Atmosphere({ mosaicRef, washRef }) {
  return (
    <>
      <div className="wash" aria-hidden="true" ref={washRef}>
        <img src="/wash.jpg" alt="" />
      </div>
      <div className="rays" aria-hidden="true" />
      <div className="wisps" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="mosaic" aria-hidden="true" ref={mosaicRef}>
        {MOSAIC.map((tile) => (
          <div key={tile.src} className={tile.className}>
            <img src={tile.src} alt="" loading="eager" decoding="async" />
          </div>
        ))}
      </div>
    </>
  )
}

function SiteNav({ onHome }) {
  return (
    <header className="site-nav">
      <a
        className="brand"
        href="/"
        onClick={(e) => {
          e.preventDefault()
          onHome?.()
        }}
      >
        <img src="/logo.png" width="256" height="256" alt="" />
        <span className="brand-name">
          Market Development <i>MDEV</i>
        </span>
        <span className="demo-mark">Demo</span>
      </a>
    </header>
  )
}

function Landing({ onEnter }) {
  return (
    <main className="hero">
      <div className="stack">
        <div className="logo-shell rise d1">
          <span className="logo-glow" aria-hidden="true" />
          <span className="logo-glow-outer" aria-hidden="true" />
          <span className="logo-ring logo-ring--a" aria-hidden="true" />
          <span className="logo-ring logo-ring--b" aria-hidden="true" />
          <span className="logo-ring logo-ring--c" aria-hidden="true" />
          <span className="logo-spark logo-spark--1" aria-hidden="true" />
          <span className="logo-spark logo-spark--2" aria-hidden="true" />
          <span className="logo-spark logo-spark--3" aria-hidden="true" />
          <span className="logo-spark logo-spark--4" aria-hidden="true" />
          <img src="/logo.png" width="256" height="256" alt="Thermal Underground" />
        </div>
        <p className="kicker rise d2">International market development</p>
        <h1>
          <span className="title-line rise d3">Accelerating</span>
          <span className="title-accent rise d4">Energy Abundance</span>
        </h1>
        <span className="rule rise d5" aria-hidden="true" />
        <p className="lede rise d5">
          Choose a sector to enter. MDEV maps markets, partners, and pipeline work across subsurface energy, nuclear, and critical materials.
        </p>
        <div className="enter-row rise d6">
          {SECTORS.map((sector) => (
            <span key={sector.id} className="enter-shell">
              <button type="button" className="enter" onClick={() => onEnter(sector.id)}>
                {sector.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}

function SectorView({ sectorId, onBack }) {
  const sector = SECTORS.find((s) => s.id === sectorId)
  if (!sector) return null

  return (
    <div className="sector-page">
      <main className="sector-main">
        <p className="kicker rise d1">MDEV · Sector</p>
        <h1 className="rise d2">{sector.title}</h1>
        <span className="rule rise d3" aria-hidden="true" />
        <p className="lede rise d4">{sector.lede}</p>
        <p className="lede rise d5" style={{ opacity: 0.55, fontSize: '16px' }}>
          Placeholder desk · content forthcoming
        </p>
        <button type="button" className="back-link rise d6" onClick={onBack}>
          ← Back to sectors
        </button>
      </main>
    </div>
  )
}

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        Thermal Underground ·{' '}
        <a href="https://thermalunderground.org">thermalunderground.org</a>
        {' '}— international market development.
      </p>
      <p>Copy © Adler Archer.</p>
    </footer>
  )
}

function sectorFromPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const match = SECTORS.find((s) => path === `/${s.id}`)
  return match?.id ?? null
}

export default function App() {
  const [sector, setSector] = useState(() => (typeof window !== 'undefined' ? sectorFromPath() : null))
  const mosaicRef = useRef(null)
  const washRef = useRef(null)

  useEffect(() => {
    const onPop = () => setSector(sectorFromPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const mosaic = mosaicRef.current
    const wash = washRef.current
    if (!mosaic) return undefined
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let raf = 0
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 28
      ty = (e.clientY / window.innerHeight - 0.5) * 18
    }
    const tick = () => {
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06
      mosaic.style.transform = `translate3d(${x}px,${y}px,0)`
      if (wash) wash.style.transform = `translate3d(${x * 0.35}px,${y * 0.35}px,0)`
      raf = requestAnimationFrame(tick)
    }
    document.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      document.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [sector])

  const goHome = () => {
    setSector(null)
    window.history.pushState({}, '', '/')
  }

  const enterSector = (id) => {
    setSector(id)
    window.history.pushState({}, '', `/${id}`)
  }

  return (
    <div className="page">
      <Atmosphere mosaicRef={mosaicRef} washRef={washRef} />
      <SiteNav onHome={goHome} />
      {sector
        ? <SectorView sectorId={sector} onBack={goHome} />
        : <Landing onEnter={enterSector} />}
      <Footer />
    </div>
  )
}
