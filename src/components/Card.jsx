import IMG from '../assets/images.js'

export default function Card({ img, tag, title, text }) {
  return (
    <article className="card">
      <img src={IMG[img]} alt="" loading="lazy" />
      <div className="b">
        {tag && <span className="tag">{tag}</span>}
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}
