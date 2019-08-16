/*
 响应完整的页面信息
*/
const http=require('http');
const path=require('path');
const fs=require('fs');
const mime=require('./mime.json');
http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'www',req.url),(err,fileContent)=>{
     if(err){
         //没有找到对应文件
         res.writeHead(404,{
             'Content-Type':'text/plain;charset=utf8'
         })
         res.end('没有找到对应文件');
     }else{
         let dtype="text/html";
         //获取请求文件的后缀
         let ext=path.extname(req.url);
         //如果请求的文件后缀合理 设置标准的响应格式
         if(mime[ext]){
             dtype=mime[ext];
            }
            //如果响应内容是文本，设置响应编码格式
            if(dtype.startsWith('text')){
                dtype+=';charset=utf8'
            }
            res.writeHead(200,{
                'Content-Type':dtype
            })
         res.end(fileContent);
     }
    });
}).listen(3000,'10.32.112.20',()=>{
    console.log('running');
});