import React, { useEffect, useState } from "react";

const OrderHistory = () => {

  const loggedInUserId = 1;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const userOrders = orders.filter(o => o.userId === loggedInUserId);

  return (
    <div className="container mt-3">
      <h2>My Orders</h2>

      {userOrders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        userOrders.map(order => (
          <div key={order.id} className="card p-3 mb-3">
            <h5>Order #{order.id}</h5>
            <p>Date: {order.date}</p>

            <ul>
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} (x{item.qty})
                </li>
              ))}
            </ul>

            <h5>Total: ₹ {order.total}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;