import { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)

  try {
    const response = await fetch(
      "https://portfolio-v7s8.onrender.com/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      }
    )

    if (response.ok) {
      setStatus("success")

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      setStatus("error")
    }

  } catch (error) {
    setStatus("error")
  }

  setLoading(false)

  setTimeout(() => setStatus(null), 5000)
}

  return (
    <section className="contact section" id="contact">
      <div className="section-header">
        <span className="section-tag">Get in Touch</span>
        <h2 className="section-title">Let's <span className="highlight">Work Together</span></h2>
        <p className="section-desc">Have a project in mind? I'd love to hear about it.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3 className="info-title">Let's build something great</h3>
          <p className="info-desc">
            I'm currently open to new opportunities — whether it's a full-time role, 
            freelance project, or just a chat about tech. My inbox is always open.
          </p>

          <div className="contact-items">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                label: 'Email',
                value: 'Patrarupak613@gmail.com',
                href: 'mailto:Patrarupak613@gmail.com',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                label: 'Location',
                value: 'Odisha, India',
                href: null,
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
                label: 'GitHub',
                value: 'github.com/patrarupak613-alt',
                href: 'https://github.com/patrarupak613-alt',
              },
            ].map(item => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <p className="ci-label">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="ci-value link">{item.value}</a>
                    : <p className="ci-value">{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="availability-card">
            <div className="avail-dot" />
            <div>
              <p className="avail-title">Available for opportunities</p>
              <p className="avail-desc">Currently accepting freelance & full-time roles</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project collaboration"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
          </div>

          {status === 'success' && (
            <div className="form-success">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Message sent! I'll get back to you soon.
            </div>
          )}

          <button type="submit" className="btn-primary submit-btn" disabled={loading}>
            {loading ? (
              <span className="loading-dots">Sending<span>.</span><span>.</span><span>.</span></span>
            ) : (
              <>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}