import axios from "axios";

const API = "http://localhost:1010/products";

export const fetchProducts = () => axios.get(API);
export const fetchProductById = (id) => axios.get(`${API}/${id}`);