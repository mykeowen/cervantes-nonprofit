import { useState } from 'react'
import { TIERS } from '../data/content.js'

export default function DonateBox() {
  const [i, setI] = useState(1)
  return (
    <section id="give">
      <div className="wrap">
        <div className="donate">
          <div>
            <h2>See what your gift grows</h2>
            <p>Pick an amount to see what it pays for. Every peso goes to field work; our office costs are covered by a separate grant.</p>
            <div className="amts" role="group" aria-label="Donation amount">
              {TIERS.map((t, k) => (
                <button key={t.a} aria-pressed={i === k} onClick={() => setI(k)}>
                  ₱{t.a.toLocaleString()}
                </button>
              ))}
            </div>
            <a className="btn" href={`mailto:mykeowencervantes@gmail.com?subject=Donation%20of%20PHP%20${TIERS[i].a}`}>
              Donate ₱{TIERS[i].a.toLocaleString()}
            </a>
          </div>
          <div>
            <div className="impact" aria-live="polite">{TIERS[i].m}</div>
            <p style={{ marginTop: 16 }}>Prefer to give time? We need weekend volunteers: agronomists, drivers, and anyone who can teach bookkeeping.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
