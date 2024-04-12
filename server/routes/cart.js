const express = require('express');
const router = express.Router();

// Временное хранилище корзины (в реальном приложении используйте базу данных)
const cartItems = [];

// Получение содержимого корзины
router.get('/', (req, res) => {
  res.json(cartItems);
});

// Добавление товара в корзину
router.post('/', (req, res) => {
  const { id, name, price, quantity } = req.body;
  const item = { id, name, price, quantity };
  cartItems.push(item);
  res.status(201).json(item);
});

// Удаление товара из корзины
router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = cartItems.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    cartItems.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
