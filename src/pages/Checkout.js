import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", address: "" });

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/success");
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