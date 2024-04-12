import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Ошибка при получении истории заказов:', error);
    }
  };

  return (
    <div>
      <h2>История заказов</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{/* Отображение информации о заказе */}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
