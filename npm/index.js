//包的入口文件
var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: 'aui'
    }
});
console.log(html);

var md=require('markdown-it')();
var result=md.render('# markdown-it rule');
console.log(result);