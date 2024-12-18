const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const projectRoot = process.cwd();

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(projectRoot, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader',
            },
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /.(png|jpg|gif|jpeg$)/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html', // 使用的模板文件
            filename: 'index.html', // 输出的 HTML 文件
            chunks: ['index'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',
        }),
    ],
};
