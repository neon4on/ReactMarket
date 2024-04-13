import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Ошибка при получении списка заказов:', error);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`/api/orders/${orderId}`, { status });
    } catch (error) {
      console.error('Ошибка при обновлении статуса заказа:', error);
    }
  };

  return (
    <div>
      <h3>Управление заказами</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {/* Отображение информации о заказе */}
            {/* Кнопки для изменения статуса заказа */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrderList;
