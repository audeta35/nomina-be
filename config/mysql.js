const mysql = require('mysql');

var conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nomina',
});

if (!conn) {
  console.log('error : ', conn);
}

module.exports = conn;
