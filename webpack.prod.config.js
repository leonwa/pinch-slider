const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        'pinchSlider': './src/index.js'
    },
    output: {
        path: './dist',
        filename: 'pinchSlider.min.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' }, {
                test: /\.(js|jsx)$/,
                use: 'babel',
                exclude: /(node_modules|bower_components)/,
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?-url!postcss-loader?'
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                  require.resolve("file-loader"),
                  {
                    loader: 'image-webpack-loader',
                    query: {
                      progressive: true,
                      optimizationLevel: 7,
                      interlaced: false,
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      }
                    }
                  }
                ]
              }
        ]
    },
    // externals: {
    //     vue: 'Vue'
    // },
    devtool: 'cheap-source-map',
    plugins: [],
};
