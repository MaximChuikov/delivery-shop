const { NODE_ENV } = process.env;
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: NODE_ENV,
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.[j|t]sx?$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx', '.json'],
                },
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    NODE_ENV === 'development'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            '@Layouts': path.resolve(__dirname, './src/layouts'),
            '@Pages': path.resolve(__dirname, './src/pages'),
            '@Components': path.resolve(__dirname, './src/components'),
            '@Constants': path.resolve(__dirname, './src/constants'),
            '@Helpers': path.resolve(__dirname, './src/helpers'),
            '@Assets': path.resolve(__dirname, './src/assets'),
            '@Styles': path.resolve(__dirname, './src/styles'),
        },
    },
    devtool: NODE_ENV === 'production' ? undefined : 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].css',
        }),
    ],
};
