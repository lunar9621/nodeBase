//文件的写入操作
const path=require('path');
const fs=require('fs');
 let root='/Users/yanhanzhang/nodePractice';
 let filecontent="welcome tothis"
let initData={
    projectName:'myDemo',
    data:[{
        name:'img',
        type:'dir'
    },{
        name:'css',
        type:'dir'
    },{
        name:'js',
        type:'dir'
    },{
        name:'index.html',
        type:'file'
    }]
}

fs.mkdir(path.join(root,initData.projectName),(err)=>{
    if(err) return;
    initData.data.forEach((item)=>{
        if(item.type=='dir'){
        //创建子目录
        fs.mkdirSync(path.join(root,initData.projectName,item.name));
        }else{
            //创建文件
            fs.writeFileSync(path.join(root,initData.projectName,item.name),filecontent);
        }
    })
});