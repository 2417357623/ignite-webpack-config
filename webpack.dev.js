const path = require("path");
const webpack  = require('webpack')

module.exports = {
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    //通过mode来自动启用在相应阶段的插件的功能。
    mode:'development',
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader'
            },
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/.(png|jpg|gif|jpeg$)/,
                use:'file-loader'
            }
        ]
    },
    //webpack5自动实现热更新，只需要配置本地服务信息
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'), // 配置静态文件的目录
        },
        compress: true,  // 启用gzip压缩
        port: 8080,      // 设置开发服务器的端口
        open: true       // 自动打开浏览器
      }
};
