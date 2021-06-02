// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/entry/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/entry/index.html',
        }),


        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.ts$|tsx/,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: ['/node_modules'],
            },
            {
                test: /\.png$/,
                type: 'asset/resource'
            },
            {
                test: /\.jpg$|.gif/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.jpg', '.png', '.gif'],
    },
};
