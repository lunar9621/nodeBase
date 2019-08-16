/*
登录验证功能
*/
const http=require('http');
const ss=require('./06.js');
const url=require('url');
const querystring=require('querystring');
http.createServer((req,res)=>{
if(req.url.startsWith('/www')){
    ss.staticServer(rew,res,__dirname);
}
if(req.url.startsWith('/login')){
    //get请求
  if(req.method == 'GET'){
      let param = url.parse(req.url,true).query;
      if(param.username == 'admin'&&param.password == '123'){
        res.end('get success');
    }else{
        res.end('get failure');
    }
  }
  if(req.method == 'POST'){
      let pdata = '';
      req.on('data',(chunk)=>{
          pdata+=chunk;
      })
      req.on('end',()=>{
        let obj=querystring.parse(pdata);
        if(obj.usernasme=='admin'&&obj.password == '123'){
            res.end('post success');
        }else{
            res.end('post failure');
        }
      })
   }
    //post请求
}
}).listen(3000,()=>{
    console.log('running...')
})