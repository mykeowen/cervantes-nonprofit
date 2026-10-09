import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'
import DonateBox from '../components/DonateBox.jsx'
import IMG from '../assets/images.js'
import { STATS, PROGRAMS, STORIES } from '../data/content.js'

export default function Home() {
  return (
    <>
      <Hero />

      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Farmers feed us. We help them earn a fair living.</h2>
            <p>Most farmers in Pampanga work less than two hectares. A single flood, a pest outbreak or one bad buyer can erase a season's income.</p>
            <p>OwenAgri Foundation gives families the three things that change that: good seed, healthy soil and a fair market. Every program is free to farmers and run with their own neighbors as trainers.</p>
            <Link className="btn dark" to="/about">Read our story</Link>
          </div>
          <img src={IMG['about-1']} alt="A smiling woman tending flowers in a greenhouse" />
        </div>
      </section>

      <section className="alt" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="wrap">
          <div className="stats">
            {STATS.map(([n, l]) => (
              <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h2>Four programs, one goal: a better harvest</h2>
          <div className="grid">
            {PROGRAMS.map((p) => <Card key={p.t} img={p.img} tag={p.tag} title={p.t} text={p.d} />)}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <p className="eyebrow">Stories from the field</p>
          <h2>Real farms, real change</h2>
          <div className="grid">
            {STORIES.map((s) => <Card key={s.t} img={s.img} tag={s.tag} title={s.t} text={s.s} />)}
          </div>
        </div>
      </section>

      <DonateBox />
    </>
  )
}
