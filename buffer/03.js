
// 路径操作

//获取路径的最后一部分
const path=require('path');
// console.log(path.basename('/foo/bar/too/zaa/quu.html'));
// console.log(path.basename('/foo/bar/too/zaa/quu.html','.html'));

//获取路径民称
// console.log(__dirname);
// console.log(path.dirname('aa/bb/c,js'));

//获取文件拓展名
//  console.log(path.extname('index.html'));

 //判断是否绝对路径


 //路径的格式化处理
 //path.format()  obj=>string
 //parse.parse()  string=>obj
//  let obj=path.parse(__filename);
//  console.log(obj);

//  { root: '/',
//   dir: '/Users/yanhanzhang/nodePractice/buffer',
//   base: '03.js',
//   ext: '.js',
//   name: '03' }

// let obj={ root: '/',
//   dir: '/Users/yanhanzhang/nodePractice/buffer',
//   base: '03.js',
//    ext: '.js',
//    name: '03' };
//    let str=path.format(obj);
//    console.log(str);

//判断是否是绝对路径
// console.log(path.isAbsolute('foo/user'));

//拼接路径path.join

//规范化路径
//path.normallize 

//计算两个路径的相对路径
console.log(path.relative('/data/orandea/test/aaa','data/arandea/impl/bbb'));

//解析路径 path.resolve
//console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

//path.delimiter 提供平台特定的路径定界符

//path.sep 环境变量分隔符


