import '../assets/styles/MotorSection.css'
import motorImage from "../assets/images/motor-image.png"

export default function MotorSection() {
  return (
    <section className="motor-section">
      <img src={motorImage}  alt="Moto impresionante" className="motor-image"/>
      <div className="motor-text">
        <h1>Bienvenidos a MotoStore</h1>
        <p>Las mejores motos al mejorprecio.</p>
        <button className="motor-button">Explorar</button>
      </div>
    </section>
  )
}
