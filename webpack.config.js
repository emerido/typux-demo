const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'source', 'index')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'output')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    silent: true
                },
                include: [
                    path.resolve(__dirname, "source")
                ]
            }
        ]
    },
    plugins: [
        //new UglifyJSPlugin()
    ],
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css']
    }
};