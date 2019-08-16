//大文件操作 文件的流式操作
//fs.createReadStream fs.createWriteSteam

const path=require('path');
const fs=require('fs');

let spath=path.join(__dirname,'笔记+源代码.7z');
let dpath=path.join(__dirname,'result.zip');
let readSteam=fs.createReadStream(spath);
let writeSteam=fs.createWriteStream(dpath);
//基于事件的处理方式
// let num=1;
// readSteam.on('data',(chunk)=>{
//     num++;
//     writeSteam.write(chunk);
// });
// readSteam.on('end',()=>{
// console.log("处理完成",num)
// })

//基于pipe的方式，pipe就是将输入流输出流链接到一起
readSteam.pipe(writeSteam);