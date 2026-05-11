import '../styles/experience.css'

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'TimesPro',
    period: '2024',
    type: 'Internship',
    desc: 'Worked on building and styling web pages using HTML, CSS, and JavaScript. Gained hands-on experience in responsive design, DOM manipulation, and front-end development best practices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]

const education = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    school: 'Centurion University, Bhubaneswar',
    period: '2024 – 2027',
    desc: 'Currently pursuing BCA with focus on programming, web technologies, database management, and software development.',
  },
  {
    degree: '12th Grade (Higher Secondary)',
    school: 'NIIS Higher Secondary School, Bhubaneswar',
    period: 'Completed 2024',
    desc: 'Completed higher secondary education with focus on Science stream.',
  },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-header">
        <span className="section-tag">Journey</span>
        <h2 className="section-title">Experience & <span className="highlight">Education</span></h2>
        <p className="section-desc">Where I've been and what I've learned</p>
      </div>

      <div className="exp-layout">
        <div className="exp-col">
          <h3 className="col-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
            Work Experience
          </h3>
          <div className="timeline">
            {experiences.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-role">{e.role}</h4>
                      <p className="timeline-company">{e.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-period">{e.period}</span>
                      <span className={`timeline-type ${e.type.toLowerCase()}`}>{e.type}</span>
                    </div>
                  </div>
                  <p className="timeline-desc">{e.desc}</p>
                  <div className="timeline-tech">
                    {e.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="exp-col">
          <h3 className="col-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Education
          </h3>
          <div className="timeline">
            {education.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot edu" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-role">{e.degree}</h4>
                      <p className="timeline-company">{e.school}</p>
                    </div>
                    <span className="timeline-period">{e.period}</span>
                  </div>
                  <p className="timeline-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}