const path = require('path');

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
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css']
    }
};