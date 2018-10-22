var path = require('path');
var webpack = require('webpack');

var filename = '';
var library = 'tool';

if (process.env.NODE_ENV === 'build') {
    filename = library + '.min.js';
} else {
    filename = library + '.js';
}
module.exports = {
    entry: path.resolve(__dirname, './src/'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename,
        library: library,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};