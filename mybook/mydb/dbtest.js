const db=require('./db.js');

let sql="insert into book set ?";
let data = {
    id:1,
    name:"笑傲江湖",
    author:'金庸',
    category:'文学',
    description:'武侠小说',
}

db.base(sql,data,(result)=>{
console.log(result);
})