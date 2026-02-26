import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:1010/products", product)
      .then(() => alert("Product Added"));
  };

  return (
    <div className="container mt-3">
      <h2>Admin Panel</h2>

      <input name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2"/>
      <input name="category" placeholder="Category" onChange={handleChange} className="form-control mb-2"/>
      <input name="price" placeholder="Price" onChange={handleChange} className="form-control mb-2"/>
      <input name="quantity" placeholder="Qty" onChange={handleChange} className="form-control mb-2"/>

      <button className="btn btn-success" onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default Admin;