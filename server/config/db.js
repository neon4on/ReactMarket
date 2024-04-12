const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'vkam',
  host: 'localhost',
  port: 5432,
  database: 'market',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
