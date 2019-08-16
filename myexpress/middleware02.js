/* 
应用中间件
*/
const express = require('express');
const app=express();
const bodyparser=require('body-parser');

// 处理get提交参数
app.get('/login',(req,res)=>{
    let data=req.query;
    console.log(data);
    res.end("get data")
})
//挂载参数处理中间件(处理的是post)
app.use(bodyparser.urlencoded({extended:false}));
 app.post('/login',(req,res)=>{
     let data=req.body;//body属性通过bodyparser添加
     console.log(data);
     if(data.username=='admin'&&data.password=='123'){
         res.send('success');
     }else{
         res.send('hello');
     }
 })

 app.listen(3000,()=>{

 });