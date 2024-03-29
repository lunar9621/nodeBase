/*
登录验证 （前端+后端+数据库）
*/

const express=require('express');
const bodyparser=require('body-parser');
const db=require('./db.js');
const app= express();

//挂载参数处理中间件
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('public'));

app.post('/check',(req,res)=>{
    let param=req.body;
    let sql='select count(*) as total from login where username=? and password=?';
    let data=[param.username,param.password];

    db.base(sql,data,(result=>{
        if(result[0].total==1){
            res.send('login success');
        }else{
            res.send('login faluire');
        }
    }))
})

app.listen(3000,()=>{
    console.log('running...');
})