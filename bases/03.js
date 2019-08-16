/* 
模块化开发

传统非模块化开发有如下缺点：
1：命名冲突
2: 文件依赖
前端标准的模块化规范(文件加载异步)
1 AMD -require.js
2 CMD -sea.js
服务器端模块化规范（同步）
3 CommonJs -Node.js
模块化相关的规则
1 如何定义模块 一个js文件就是一个模块，模块内部的成员相互独立
2 模块成员的导出和引入
*/

var sum=function(a,b){
    return parseInt(a)+parseInt(b);
}
//导出模块成员
//exports.sum=sum;

//导出成员的另一种方式
module.exports = sum;