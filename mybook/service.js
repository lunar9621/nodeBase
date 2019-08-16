/*
业务模块
*/
const data=require('./data.json');
const path=require('path');
const fs=require('fs');
const db=require('./db.js')
//自动生成图书编号
let maxBookCode=()=>{
    let arr=[];
    data.forEach((item)=>{
        arr.push(item.id);
    });
    return Math.max.apply(null,arr);
}
//把内存数据写入文件
let writeDatatofile=(res)=>{
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
        if(err){
            res.send('server error');
        }
        //文件写入成功后，重新跳转到主页面
        res.redirect('/');
    });
}
//渲染主页面
exports.showIndex = (req,res)=>{
 let sql='select * from book';
 db.base(sql,null,(result)=>{
    res.render('index',{list:result});
 })
 
}

exports.toAddBook = (req,res)=>{
    console.log("enter1");
    res.render('addBook',{});
   }

exports.addBook = (req,res)=>{
    console.log("enter");
   let info=req.body;
   let book={};
   for(let key in info){
       book[key]=info[key];
   }
  let sql='insert into book set ?';
  db.base(sql,book,(result)=>{
  if(result.affectedRows==1){
      res.redirect('/');
  }
  })

}

exports.toEditBook=(req,res)=>{
    let id=req.query.id;
    let sql='select * from book where id=?';
    let data=[id];
    db.base(sql,data,(result)=>{
        res.render('editBook',result[0]);
    });
}

exports.editBook=(req,res)=>{
    let info=req.body;
    let sql="update book set name=?,author=?,category=?,description=? where id=?";
    let data=[info.name,info.author,info.categery,info.description,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows==1){
            res.redirect('/');
        }
    })
}

exports.deleteBook=(req,res)=>{
    let id=req.query.id;
    let sql='delete from book where id=?';
    let data=[id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows==1){
            res.redirect('/');
        }
    })
}

