import { useState } from 'react'
import '../styles/projects.css'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio! Built with React + Vite, featuring smooth animations, responsive design, and dark theme.',
    tags: ['React', 'Vite', 'CSS3'],
    github: 'https://github.com',
    live: null,
    gradient: 'linear-gradient(135deg, #6af0d422, #ff6a8e22)',
    accent: '#6af0d4',
    featured: true,
  },
]

const filters = ['All', 'React', 'Vite', 'CSS3']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <section className="projects section" id="projects">
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        <p className="section-desc">Things I've built that I'm proud of</p>
      </div>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className={`project-card ${p.featured ? 'featured' : ''}`}
            style={{ '--gradient': p.gradient, '--accent': p.accent, animationDelay: `${i * 0.05}s` }}
          >
            <div className="project-img" style={{ background: p.gradient }}>
              <div className="project-img-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: p.accent }}>
                  <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              {p.featured && <span className="featured-badge">Featured</span>}
            </div>

            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
