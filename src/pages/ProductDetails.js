import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../api/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductById(id).then(res => setProduct(res.data));
  }, [id]);

  return (
    <div className="container mt-3">
      <h2>{product.name}</h2>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductDetails;