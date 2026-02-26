import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/productApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;