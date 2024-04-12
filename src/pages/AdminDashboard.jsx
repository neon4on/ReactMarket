import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminProductList from './AdminProductList';
import AdminOrderList from './AdminOrderList';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Админ-панель</h2>
      <nav>{/* Ссылки на страницы управления товарами и заказами */}</nav>

      <Routes>
        <Route path="/products" element={<AdminProductList />} />
        <Route path="/orders" element={<AdminOrderList />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
