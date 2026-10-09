import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <h3>OwenAgri Foundation</h3>
          <p>Helping smallholder farmers in Pampanga thrive.</p>
          <p>Non-stock, non-profit · SEC registered</p>
        </div>
        <div>
          <h3>Visit us</h3>
          <p>Dolores, Mabalacat City, Pampanga</p>
          <p>mykeowencervantes@gmail.com</p>
          <p>Mon–Sat, 8:00 AM – 5:00 PM</p>
        </div>
        <div>
          <h3>Pages</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
        </div>
      </div>
    </footer>
  )
}
