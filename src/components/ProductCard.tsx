interface Product {
  image: string;
  name: string;
  price: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="pproduct-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  )
}
