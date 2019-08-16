/* 
全局成员概述
*/
//包含文件名称的全路径
console.log(__filename);
//文件的路径（不包含文件名）
console.log(__dirname);

//定时函数
setTimeout(function(){
    console.log(123)
},2000);
//argv是一个数组。默认情况下，第一个是nodejs的安装路径，第二个是当前执行文件的路径
//从第三个参数开始，表示命令行参数
console.log(process.argv);
//打印当前系统的架构
console.log(process.arch)