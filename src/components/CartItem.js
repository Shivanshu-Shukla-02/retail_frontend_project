import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="card p-2 mb-2 d-flex flex-row align-items-center">
      <img
        //src={item.imageUrl}
        alt={item.name}
        style={{ width: "80px", height: "80px" }}
      />

      <div className="ms-3 flex-grow-1">
        <h5>{item.name}</h5>
        <p>₹ {item.price}</p>

        <button className="btn btn-sm btn-secondary"
          onClick={() => decreaseQty(item.id)}
        >
          -
        </button>

        <span className="mx-2">{item.qty}</span>

        <button className="btn btn-sm btn-secondary"
          onClick={() => increaseQty(item.id)}
        >
          +
        </button>

        <button
          className="btn btn-sm btn-danger ms-3"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;