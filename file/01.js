/*
异步IO 文件系统
1、文件操作
2、网络操作
浏览器中的异步操作
1 定时任务
2 事件处理
3 ajax回调处理

nodejs中的事件模型与浏览器中的事件模型类似
单线程+事件队列

node.js中异步执行的任务有：
1.文件io
2.网络io
基于回调函数的编码风格
*/
const fs=require('fs');
//一般回调函数的第一个参数是个错误对象，如果error为空则没有错误，否则表示报错

//异步方式
// console.log(1);
// fs.stat('../buffer/01.js',(err,stats)=>{
//     if(err){
//         console.log(err);
//         return 
//     }
//     if(stats.isFile()){
//   console.log('isfile')
//     }else if(stats.isDirectory()){
//         console.log('isdir');
//     }
//     console.log(stats);
// console.log(3);
// })
// console.log(2);
// atime: 访问时间
// mtime: 文件数据修改时间
// ctime: 文件状态修改时间 如文件权限等
//birthtime：创建时间

//同步方式
// console.log(1)
// let ret=fs.statSync('../buffer/01.js');
// console.log(ret);
// console.log(2);


//读文件
//异步方式
// const path=require('path');
// const strpath=path.join(__dirname,'../buffer/01.js');
//如果没有的二个参数，得到的data就是buffer对象
// fs.readFile(strpath,(err,data)=>{
//     if(err) return;
//     console.log(data.toString());
// })
//同步方式
// let ret=fs.readFileSync(strpath)
// console.log(ret);


