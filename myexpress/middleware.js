
/* 
中间件的挂载方式和执行流程：
use 路由方式
*/
const express = require('express');
const app=express();

// app.use('/user',(req,res,next)=>{
//   next()//调用后把请求传递到下一个中间件
// })
// app.listen(3000,()=>{

// })

app.get('/abc',(req,res,next)=>{
    console.log(1);
 next('route');//跳转到下一个路由，通过（get）等方式绑定的路由
},(req,res)=>{
    console.log(2);
 res.send('abc');
});

app.get('/abc',(req,res,next)=>{
    console.log(3);
    next();
   })
app.listen(3000,()=>{
    console.log('running');
})
