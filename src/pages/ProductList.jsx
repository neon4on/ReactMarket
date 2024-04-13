import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  padding: 20px;
`;

const ProductCard = styled.div`
  background-color: #333;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
`;

const ProductTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  color: #ff9800;
  font-size: 16px;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  /* Стили для кнопки "Добавить в корзину" */
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Ошибка при получении списка товаров:', error);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      await axios.post('/api/cart', { productId, quantity });
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error);
    }
  };

  return (
    <ProductListContainer>
      <h2>Список товаров</h2>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price} руб.</p>
          <AddToCartButton onClick={() => addToCart(product.id)}>
            Добавить в корзину
          </AddToCartButton>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
