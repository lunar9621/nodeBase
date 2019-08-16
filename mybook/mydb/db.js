/*
封装操作数据哭的通用api
*/
/*
删除数据
*/
var mysql = require('mysql');

exports.base =(sql,data,callback)=>{
        var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root123',
    database : 'mbook'
    });
    
    connection.connect();
    connection.query(sql,data, function (error, results, fields) {
    if (error) throw error;
    callback(results);
    console.log(results);
    });
    
    connection.end();
}
