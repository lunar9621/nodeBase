
//初步实现服务器功能
const http=require('http');
// //创建服务器请求事件，返回值是一个server对象
// let server=http.createServer();
// //绑定请求事件
// server.on('request',(req,res)=>{
//  res.end('hello');
// })

// server.listen(3000);
//---------------------

http.createServer((req,res)=>{
    res.end('ok');
}).listen(3000,'10.32.112.20',()=>{
    console.log('running');
});//打印出runninf证明服务器启动成功