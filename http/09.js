/*
post参数处理 
*/
const querystring = require('querystring');
const http = require('http');
// let param='username=lisi&password=123';

// let obj=querystring.parse(param);

// console.log(obj);

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
    let pdata = '';
    req.on('data',(chunk)=>{
        pdata += chunk;
    })
    req.on('end',()=>{
        console.log(pdata);
        let obj = querystring.parse(pdata);
        res.end(obj.username+'----'+obj.password);
    })
  }
}).listen(3000,()=>{
    console.log('running...');
})