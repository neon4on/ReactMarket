const express = require('express');
const router = express.Router();
const db = require('../config/db');

const cartItems = [];

router.get('/', (req, res) => {
  res.json(cartItems);
});

router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [productId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Товар не найден' });
    }
    const product = rows[0];
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity || 1,
    };
    cartItems.push(item);
    res.status(201).json(item);
  } catch (error) {
    console.error('Ошибка при добавлении товара в корзину:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

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
