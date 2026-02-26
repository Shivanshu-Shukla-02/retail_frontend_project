import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [form, setForm] = useState({ name: "", address: "" });

  const handleSubmit = e => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart empty");
      return;
    }

    const newOrder = {
      id: Date.now(),
      userId: 1,
      date: new Date().toDateString(),
      total: cart.reduce((a, i) => a + i.price * i.qty, 0),
      items: cart
    };

    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]));

    localStorage.removeItem("cart");

    navigate("/orders");
  };

  return (
    <div className="container mt-3">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="form-control mb-2"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Address"
          className="form-control mb-2"
          onChange={e => setForm({ ...form, address: e.target.value })}
        />

        <button className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;