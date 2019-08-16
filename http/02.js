/*
 http处理请求路径分发
 1，req对象是class:http.IncomingMessage的实例对象
 2. res对象是class:http.ServerResponse的实例对象
*/
const http=require('http');

http.createServer((req,res)=>{
    if(req.url.startsWith('/index.html')){
        //向客户端响应内容
        res.write('hello');
        res.end('index');//什么都不写表示完成响应，此方法只能执行一次
    }else if(req.url.startsWith('/about')){
        res.end('about');
    }else{
        res.end('no content');}
}).listen(3000,'10.32.112.20',()=>{
    console.log('running');
});