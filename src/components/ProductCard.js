import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-3">
      <div className="card shadow p-3 text-center">

        <h5>{product.name}</h5>
        <p>Category: {product.category}</p>
        <h6>₹ {product.price}</h6>
        <p>Stock: {product.quantity}</p>

        <button
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;