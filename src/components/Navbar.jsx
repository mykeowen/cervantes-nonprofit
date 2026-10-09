import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ theme, setTheme }) {
  const linkClass = ({ isActive }) => 'nl' + (isActive ? ' active' : '')
  return (
    <header className="top">
      <div className="wrap">
        <nav aria-label="Main">
          <Link className="brand" to="/">
            <span className="t">OwenAgri <b>Foundation</b></span>
          </Link>
          <div className="links">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <button
              className="tbtn"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
