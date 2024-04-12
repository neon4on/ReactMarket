const express = require('express');
const app = express();

// Middleware для обработки JSON-данных
app.use(express.json());

// Маршруты для аутентификации
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const cartRoutes = require('./routes/cart');
app.use('/api/cart', cartRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
