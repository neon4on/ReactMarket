import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Ошибка при получении элементов корзины:', error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      await axios.put(`/api/cart/${itemId}`, { quantity });
      // Обновление элементов корзины после успешного изменения количества
    } catch (error) {
      console.error('Ошибка при обновлении количества элемента корзины:', error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`/api/cart/${itemId}`);
      // Обновление элементов корзины после успешного удаления элемента
    } catch (error) {
      console.error('Ошибка при удалении элемента корзины:', error);
    }
  };

  const checkout = async () => {
    try {
      await axios.post('/api/orders');
      // Обработка успешного оформления заказа
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
    }
  };

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {/* Отображение информации о товаре в корзине */}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Оформить заказ</button>
    </div>
  );
};

export default Cart;
