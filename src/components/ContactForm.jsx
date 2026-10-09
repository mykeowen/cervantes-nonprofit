import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  return (
    <section className="alt">
      <div className="wrap">
        <h2>Say hello</h2>
        <p>Questions, partnerships or want to volunteer? I read every message. You can also write to <a href="mailto:mykeowencervantes@gmail.com">mykeowencervantes@gmail.com</a>.</p>
        {sent ? (
          <div className="ok" role="status">Thank you. Myke will reply within three working days.</div>
        ) : (
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <label>Your name<input required name="name" autoComplete="name" /></label>
            <label>Email<input required type="email" name="email" autoComplete="email" /></label>
            <label>Message<textarea required rows="4" name="msg" /></label>
            <button className="btn dark" type="submit">Send message</button>
          </form>
        )}
      </div>
    </section>
  )
}
