const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
    },

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: "<NDRESGARC/>",
            template: "./src/index.template.handlebars",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false,
            },
        }),
    ],

  };