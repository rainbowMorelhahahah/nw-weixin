/**
 * Created by maple on 16-12-19.
 */
var NwBuilder =require('nw-builder');

var nw =new NwBuilder({
    files: './package.json',//包含文件
    platforms: ['linux64'],//打包平台
    version: "0.14.6"//使用的NW.js版本
});

nw.on('log',console.log);//日志打印函数

//开始构建
nw.build().then(function () {
    console.log('done!');
}).catch(function (err) {
    console.log(err);
});