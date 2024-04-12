import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProductList = () => {
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

  const addProduct = async (product) => {
    try {
      await axios.post('/api/products', product);
      // Обновление списка товаров после успешного добавления
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error);
    }
  };

  const updateProduct = async (productId, product) => {
    try {
      await axios.put(`/api/products/${productId}`, product);
      // Обновление списка товаров после успешного обновления
    } catch (error) {
      console.error('Ошибка при обновлении товара:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      // Обновление списка товаров после успешного удаления
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
    }
  };

  return (
    <div>
      <h3>Управление товарами</h3>
      {/* Форма для добавления нового товара */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Отображение информации о товаре */}
            {/* Кнопки для редактирования и удаления товара */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductList;
