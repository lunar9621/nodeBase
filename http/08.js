//获取get请求的参数
const http=require('http');
const url=require('url');
const path=require('path');
http.createServer((req,res)=>{
  let obj=url.parse(req.url,true);
  res.end(obj.query.username+"===="+obj.query.password);
}).listen(3000,()=>{
    console.log("running");
})