/* 
更新数据
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'mbook'
});
 
connection.connect();

let sql='update book set name=?,author=?,category=?,description=?where id=?';
  let data=[
      'zyh','ayh','test','desc','1'
  ]
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log('results');
});
 
connection.end();