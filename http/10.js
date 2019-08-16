/* 
动态网站开发
*/

const http = require('http');
const path=require('path');
const fs= require('fs');
const querystring=require('querystring');
const scoreData = require('./scores.json');
http.createServer((req,res)=>{
  //查询成绩的入口地址 /query
  if(req.url.startsWith('/query')&&req.method == 'GET'){
     fs.readFile(path.join(__dirname,'view','index.tpl'),'utf-8',(err,content)=>{
   if(err){
       res.writeHead(500,{
           'content-type':'text/plain;charset=utf-8'
       })
       res.end('服务器错误');
   }
    res.end(content);
     })
  }else if(req.url.startsWith('/score')&&req.method == 'POST'){
      let pdata = '';
      req.on('data',(chunk)=>{
          pdata+=chunk;
      })
      req.on('end',()=>{
        let obj=querystring.parse(pdata);
        let result=scoreData[obj.code];
        fs.readFile(path.join(__dirname,'view','result.tpl'),'utf-8',(err,content)=>{
            if(err){
                res.writeHead(500,{
                    'content-type':'text/plain;charset=utf-8'
                })
                res.end('服务器错误');
            }
            content=content.replace('$$chinese$$',result.chinese);
            content=content.replace('$$math$$',result.math);
            content=content.replace('$$english$$',result.english);
            content=content.replace('$$summary$$',result.summary);
            res.end(content);
        })
      })
  }
  //获取成绩的结果/score
}).listen(3000,()=>{
    console.log('runnning....');
}); 