import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {

  const [products] = useState([
    {
      id: 1,
      name: "iPhone 14",
      price: 70000,
      imageUrl: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung S23",
      price: 65000,
      imageUrl: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Boat Headphones",
      price: 2000,
      imageUrl: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Laptop",
      price: 55000,
      imageUrl: "https://via.placeholder.com/200"
    }
  ]);

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