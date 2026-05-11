import { useState, useEffect } from 'react'
import '../styles/navbar.css'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
    setActive(id)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Rupak</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <button
                className={`nav-link ${active === l ? 'active' : ''}`}
                onClick={() => scrollTo(l)}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <a
          className="nav-cta"
          href="mailto:rupak@email.com"
        >
          Hire me
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l} className="mobile-link" onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
        <a className="mobile-cta" href="mailto:rupak@email.com">Hire me</a>
      </div>
    </nav>
  )
}
