var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tecnoglass'
});

module.exports = connection;
