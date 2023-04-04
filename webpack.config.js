// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map',
        watch: !isProduction,
        entry: ['./src/index.js', './src/css/style.css'],
        output: {
            filename: 'script.js',
            path: path.resolve(__dirname, './dist'),
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                      }
                    }
                }, {
                    test: /\.css$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        // "style-loader",
                        // Create 'style.css' in dist
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader'
                        // Compiles Sass to CSS
                        // 'sass-loader'
                    ]
                }, {
                    test: /\.(svg|png|jpe?g|gif)$/,
                    type: 'asset/resource'
                }, {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
            ]
        },

        plugins: [
            // new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    }

    return config;
}
