import ProductCard from "./ProductCard";

export default function ProductList() {
const products = [
  { id:1,name:'moto1', price:'$5000', image:'' },
  { id:2,name:'moto2', price:'$6000', image:'' },
  { id:3,name:'moto3', price:'$7000', image:'' }
]

  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
