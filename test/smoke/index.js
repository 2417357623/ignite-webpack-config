// node test/smoke/index.js

const path = require('path');
const webpack = require('webpack');
const { rimraf } = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '10000ms',
});

process.chdir(path.join(__dirname, 'template'));

(async () => {
    await rimraf('./dist');
    const prodConfig = require('../../lib/webpack.prod.js');

    webpack(prodConfig, (error, stats) => {
        if (error) {
            console.error(error);
            process.exit(2);
        }
        console.log(
            stats.toString({
                colors: true,
            }),
        );

        console.log('start to run test');

        mocha.addFile(path.join(__dirname, 'html-test.js'));

        mocha.run();
    });
})();
