import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IMG from '../assets/images.js'
import { SLIDES } from '../data/content.js'

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [])

  const go = (d) => setI((i + d + SLIDES.length) % SLIDES.length)

  return (
    <div className="hero" aria-roledescription="carousel" aria-label="Featured stories">
      {SLIDES.map((s, k) => (
        <div key={k} className={'slide' + (k === i ? ' on' : '')} aria-hidden={k !== i}>
          <img src={IMG[s.img]} alt="" loading={k ? 'lazy' : 'eager'} />
        </div>
      ))}
      <div className="cap">
        <div className="wrap">
          <div className="in">
            <p className="eyebrow">OwenAgri Foundation</p>
            <h1>{SLIDES[i].t}</h1>
            <p>{SLIDES[i].d}</p>
            <div className="row">
              <a className="btn" href="#give">Support a farmer</a>
              <Link className="btn out" to="/about">Meet our founder</Link>
            </div>
          </div>
        </div>
      </div>
      <button className="arrow l" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
      <button className="arrow r" onClick={() => go(1)} aria-label="Next slide">›</button>
      <div className="dots">
        {SLIDES.map((_, k) => (
          <button key={k} aria-label={'Slide ' + (k + 1)} aria-current={k === i} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  )
}
