const path = require("path");
const webpack  = require('webpack')

module.exports = {
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name]_[chunkhash:8].js'
    },
    //通过mode来自动启用在相应阶段的插件的功能。
    mode:'production',
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
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name]_[hash:8][ext]'
                        }
                    }
                ]
            }
        ]
    }
};
