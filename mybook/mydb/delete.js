/*
删除数据
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'mbook'
});
 
connection.connect();
let sql='delete from book where id = ?';
let data=[1];
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log('results');
});
 
connection.end();