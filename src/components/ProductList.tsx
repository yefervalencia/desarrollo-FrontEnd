import ProductCard from "./ProductCard"
import '../assets/styles/ProductList.css'
import moto1 from '../assets/images/moto1.png'
import moto2 from '../assets/images/moto2.png'
import moto3 from '../assets/images/moto3.webp'

export default function ProductList() {
const products = [
  { id:1,name:'moto1', price:'$5000', image: moto1},
  { id:2,name:'moto2', price:'$6000', image: moto2},
  { id:3,name:'moto3', price:'$7000', image: moto3}
]

  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
