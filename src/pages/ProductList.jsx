import React from 'react';
import styled from 'styled-components';
import products from '../mockData/products';

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

const ProductList = () => {
  return (
    <ProductListContainer>
      <h2>Список товаров</h2>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price}</ProductPrice>
          {/* Дополнительная информация о товаре */}
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
