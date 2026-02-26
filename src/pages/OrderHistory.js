import React, { useState } from "react";

const OrderHistory = () => {

  const loggedInUserId = 1;   // dummy logged in user

  const [orders] = useState([
    {
      id: 1,
      userId: 1,
      date: "20 Feb 2026",
      total: 72000,
      items: [{ name: "iPhone 14", qty: 1 }]
    },
    {
      id: 2,
      userId: 2,
      date: "18 Feb 2026",
      total: 65000,
      items: [{ name: "Samsung S23", qty: 1 }]
    }
  ]);

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