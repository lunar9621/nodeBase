/*
路由模块 
*/

const express=require('express');
const router=express.Router();
const service=require('./service.js');

//渲染主页面
router.get('/',service.showIndex);
//添加图书
router.get('/toAddBook',service.toAddBook);
router.post('/addBook',service.addBook);
//跳转到编辑图书信息页面
router.get('/toEditBook',service.toEditBook);
router.post('/editBook',service.editBook);
//删除图书信息
router.get('/deleteBook',service.deleteBook);
module.exports=router;



