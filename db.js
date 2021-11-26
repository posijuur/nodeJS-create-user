const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'node_users',
  password: 'g1111111',
  port: 5432,
});

module.exports = pool;
