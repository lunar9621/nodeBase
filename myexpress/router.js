/*
路由（根据请求方式和请求路径进行路径分发处理）
http常用请求方式：
post get 
put 更新
delete 删除
restful api （一种url的格式S）
*/

const express=require('express');
const app=express();

//直接使用use分发可以处理所有的路由请求
app.use((req,res)=>{
 res.send('ok');
})
// //基本的路由处理
// app.get('/',(req,res)=>{
//     res.send('get data');
// })

// app.post('/',(req,res)=>{
//     res.send('post data');
// })

// app.put('/',(req,res)=>{
//     res.send('put data');
// })

// app.delete('/',(req,res)=>{
//     res.send('delete data');
// })

// app.listen(3000,()=>{
//     console.log('running');
// })