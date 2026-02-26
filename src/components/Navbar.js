import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Retail App</Link>

        <Link to="/cart" className="btn btn-warning">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;