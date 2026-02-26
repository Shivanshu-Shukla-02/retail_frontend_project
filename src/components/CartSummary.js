import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { cart } = useCart();

  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);

  return (
    <div className="card p-3">
      <h4>Total: ₹ {total}</h4>
      <Link to="/checkout" className="btn btn-success">
        Checkout
      </Link>
    </div>
  );
};

export default CartSummary;