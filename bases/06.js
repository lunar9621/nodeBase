//模块文件的后缀三种情况：.js .json .node (不加后缀名)加载优先级为：.js>.json>.node
require('./05.js');
console.log(global.flag);
function fo(){
    console.log(this);
}
fo();