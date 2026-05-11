import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-bracket">&lt;</span>
          <span>Rupak</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-text">
          Built with React & ❤️ — Designed & Developed by Rupak
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
