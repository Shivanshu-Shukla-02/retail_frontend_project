import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="container mt-3">
      <h2>Cart</h2>

      <div className="row">
        <div className="col-md-8">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="col-md-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;