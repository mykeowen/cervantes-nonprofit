import IMG from '../assets/images.js'
import ContactForm from '../components/ContactForm.jsx'
import { TIMELINE } from '../data/content.js'

export default function About() {
  return (
    <>
      <div className="pagehead">
        <img src={IMG['hero-bg']} alt="" />
        <div className="wrap">
          <p className="eyebrow" style={{ color: 'var(--primary)' }}>About Us</p>
          <h1>Myke Owen Cervantes</h1>
          <p style={{ maxWidth: 620, fontSize: '1.2rem' }}>
            Founder of OwenAgri Foundation and a farmer's son from Mabalacat City, Pampanga
          </p>
        </div>
      </div>

      <section>
        <div className="wrap split">
          <img src={IMG['feature-1']} alt="Myke Owen Cervantes in a white school uniform and striped tie" style={{ maxHeight: 640, objectPosition: 'center 20%' }} />
          <div>
            <h2>All about me</h2>
            <p>I grew up on my family's two-hectare rice and vegetable farm. I watched my parents lose a full season to a flood and then borrow from a lender at ruinous rates just to plant again.</p>
            <p>I studied agriculture at Angeles University Foundation and worked six years as an agronomist for a seed company. In 2015, after Typhoon Lando, I started collecting seed and tools for neighbors. That small effort became OwenAgri Foundation.</p>
            <p>Today I split my week between the field schools, the seed bank and the budget. I believe a farmer who knows why a method works will keep using it long after we leave.</p>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>How we grew</h2>
            <ol className="tl">
              {TIMELINE.map(([y, t]) => (
                <li key={y}><b>{y}</b><p>{t}</p></li>
              ))}
            </ol>
          </div>
          <img src={IMG['feature-2']} alt="A hand holding a head of ripening grain in a golden field" style={{ maxHeight: 560 }} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>What we stand for</h2>
          <div className="grid">
            <div className="card"><div className="b"><h3>Farmers lead</h3><p>Trainers are graduates of our own schools. Villages choose which programs they need first.</p></div></div>
            <div className="card"><div className="b"><h3>Open books</h3><p>We post audited accounts each March at Mabalacat city hall and send them by email on request.</p></div></div>
            <div className="card"><div className="b"><h3>Care for the soil</h3><p>Every method we teach lowers chemical use and keeps the land productive for the next generation.</p></div></div>
          </div>
        </div>
      </section>


      <ContactForm />
    </>
  )
}
