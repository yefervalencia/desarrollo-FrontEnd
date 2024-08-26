import '../assets/styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className ="navbar">
      <div className="navbar-logo">motoStore</div>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#aboutUs">AboutUs</a></li>
        <li><a href="#contactUs">ContactUs</a></li>
      </ul>
    </nav>
  )
}
