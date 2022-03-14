// app.js
import Koa from 'koa';
import path from 'path';
import koaBody from 'koa-body';
import babelRegister from 'babel-register';

// const path = require('path');
// const Koa = require('koa');
const app = new Koa();

const body = koaBody({ // 解析body的中间件
    multipart: true, // 支持文件上传
    encoding: 'gzip',
    formLimit: '5mb', // 限制表单请求体的大小
    jsonLimit: '5mb', // JSON 数据体的大小限制
    textLimit: '5mb', // 限制 text body 的大小
    formidable: {
        uploadDir: path.join(process.cwd(), '/public/upload'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
        onFileBegin: (name, file) => { // 文件上传前的设置
            console.log(`name: ${name}`)
            console.log(file)
        }
    }
});
babelRegister();
// 解析body的中间件
app.use(body)
app.listen(30000, () => {
    console.log('server is running')
})
