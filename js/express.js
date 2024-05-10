const express = require('express');
const app = express();

// 设置静态资源目录
app.use(express.static('/'));

// POST 请求
app.post('/download', (req, res) => {
    // 设置响应头
    // res.setHeader('Content-Type', '');
    res.setHeader('Content-Disposition', 'attachment; filename=demo.excel');

    // 将文件内容写入响应输出流
    const fs = require('fs');
    const filePath = 'demo.txt';
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

// 监听端口
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
