import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #222;
  border-radius: 4px;
`;

const CartItemName = styled.span`
  flex: 1;
  color: #fff;
`;

const CartItemQuantity = styled.span`
  margin-left: 10px;
  color: #fff;
`;

const CartItemPrice = styled.span`
  margin-left: 10px;
  color: #fff;
`;

const CartItemRemove = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CartTotal = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Загрузка содержимого корзины с сервера
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      // Выполнение запроса к серверу для получения содержимого корзины
      const response = await axios.get('/api/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке корзины:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      // Выполнение запроса к серверу для удаления товара из корзины
      await axios.delete(`/api/cart/${itemId}`);
      // Обновление состояния корзины после удаления товара
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Ошибка при удалении товара из корзины:', error);
    }
  };

  const calculateTotal = () => {
    // Расчет общей стоимости товаров в корзине
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContainer>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <span>{item.name}</span>
              <span>Количество: {item.quantity}</span>
              <span>Цена: {item.price} руб.</span>
              <button onClick={() => removeFromCart(item.id)}>Удалить</button>
            </CartItem>
          ))}
          <CartTotal>
            <strong>Общая стоимость:</strong> {calculateTotal()} руб.
          </CartTotal>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
