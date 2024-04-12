import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Ошибка при получении информации о товаре:', error);
    }
  };

  const addToCart = async () => {
    try {
      await axios.post('/api/cart', { productId: id });
      // Обработка успешного добавления в корзину
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error);
    }
  };

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Отображение детальной информации о товаре */}
      <button onClick={addToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductDetails;
