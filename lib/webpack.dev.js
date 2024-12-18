const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');

const devConfig = {
    // webpack5自动实现热更新，只需要配置本地服务信息
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // 配置静态文件的目录
        },
        compress: true, // 启用gzip压缩
        port: 8080, // 设置开发服务器的端口
        open: true, // 自动打开浏览器
    },
    mode: 'development',
};

module.exports = merge(baseConfig, devConfig);
