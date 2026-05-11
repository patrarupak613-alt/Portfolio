import '../styles/skills.css'

const skills = {
  'Frontend': [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML / CSS', level: 92 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  'Backend': [
    { name: 'Node.js', level: 84 },
    { name: 'Express.js', level: 82 },
    { name: 'REST APIs', level: 87 },
    { name: 'MongoDB', level: 78 },
  ],
  'Tools & Others': [
    { name: 'Git & GitHub', level: 88 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 80 },
    { name: 'Figma', level: 70 },
  ],
}

const techIcons = [
  { name: 'React', color: '#61DAFB', char: 'Re' },
  { name: 'Node.js', color: '#68A063', char: 'Nd' },
  { name: 'MongoDB', color: '#47A248', char: 'Mg' },
  { name: 'Express', color: '#ffffff', char: 'Ex' },
  { name: 'JavaScript', color: '#F7DF1E', char: 'JS' },
  { name: 'TypeScript', color: '#3178C6', char: 'TS' },
  { name: 'Git', color: '#F05032', char: 'Gt' },
  { name: 'Tailwind', color: '#06B6D4', char: 'Tw' },
  { name: 'Figma', color: '#A259FF', char: 'Fg' },
  { name: 'HTML5', color: '#E34F26', char: 'H5' },
  { name: 'CSS3', color: '#1572B6', char: 'C3' },
  { name: 'Postman', color: '#FF6C37', char: 'Pm' },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-header">
        <span className="section-tag">My Arsenal</span>
        <h2 className="section-title">Skills & <span className="highlight">Technologies</span></h2>
        <p className="section-desc">Technologies I work with to bring ideas to life</p>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-card">
            <h3 className="skill-cat">{category}</h3>
            <div className="skill-bars">
              {items.map(skill => (
                <div key={skill.name} className="skill-bar-item">
                  <div className="skill-bar-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ '--pct': `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech bubble cloud */}
      <div className="tech-cloud">
        <div className="marquee-track">
          {[...techIcons, ...techIcons].map((tech, i) => (
            <div key={i} className="tech-bubble" style={{ '--color': tech.color }}>
              <span className="tech-char">{tech.char}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
