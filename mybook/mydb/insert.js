/* 
插入数据
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'mbook'
});
 
connection.connect();

let sql='insert into book set ?'
 
let data={
 name:'明朝',
 author:'当年明月',
 category:'文学',
 description:'历史'
}
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log('results');
});
 
connection.end();