import '../assets/styles/Principal.css';
import MotorSection from './MotorSection';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

export default function Principal() {
  return (
    <main className='main'>
      <MotorSection/>
      <ProductList/>
      <AboutUs/>
      <ContactUs/>
    </main>
  )
}
