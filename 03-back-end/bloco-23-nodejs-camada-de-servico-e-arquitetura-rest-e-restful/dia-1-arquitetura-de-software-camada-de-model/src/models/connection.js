const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'password',
  port: 3306,
  host: 'db',
  database: 'cep_lookup',
});

module.exports = connection;