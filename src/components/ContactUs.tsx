import '../assets/styles/ContactUs.css'

export default function ContactUs() {
  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
      <p>Nos puedes contactar por nuestro celular o correo</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required/>
        </label>
        <label>
          Email:
          <input type="email" name="email" required/>
        </label>
        <label>
          Message:
          <textarea name="message" rows={4} required/>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
