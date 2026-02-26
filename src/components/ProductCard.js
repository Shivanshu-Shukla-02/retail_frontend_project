import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-3">
      <div className="card shadow p-2">

        {/* PRODUCT DETAILS LINK */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="card-img-top"
          />
        </Link>

        <div className="card-body">
          <h5>{product.name}</h5>
          <p>₹ {product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;