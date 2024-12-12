module.exports = {
    parser: '@babel/eslint-parser', // 使用新的 babel 解析器
    extends: 'airbnb-base',
    env: {
        browser: true,
        node: true,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['off'], // 禁用换行符检查
    },
};
