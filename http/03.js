/*
 响应完整的页面信息
*/
const http=require('http');
const path=require('path');
const fs=require('fs');
let readFile=(url,res)=>{
    fs.readFile(path.join(__dirname,'www',url),'utf-8',(err,fileContent)=>{
        if(err){
            res.end('server error');
        }else{
            res.end(fileContent);
        }
    });
}
http.createServer((req,res)=>{
    if(req.url.startsWith('/index.html')){
       readFile('index.html',res);
    }else if(req.url.startsWith('/about')){
        readFile('about.html',res);
    }else if(req.url.startsWith('/list')){
        readFile('list.html',res);
    }else{
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
        }
        )
        res.end('页面未找到');
    }
}).listen(3000,'10.32.112.20',()=>{
    console.log('running');
});