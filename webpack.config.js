// const path = require('path')
// const webpack = require('webpack');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// const extractTextPlugin = require('extract-text-webpack-plugin'); 

// module.exports = {
//     "entry": path.join(__dirname, 'src', 'index.js'),
//     "module": {
//         "rules": [
//             {
//                 "test": /\.js$/,
//                 "exclude": [/node_modules/],
//                 "use": {
//                     "loader": "babel-loader"
//                 }
//             },
//             {
//                 "test": /\.css$/,
//                 "exclude": [/node_modules/],
//                 "use": extractTextPlugin.extract({use :["css-loader"]})
//             }
//         ]
//     },
//     "devServer": {
//         "contentBase": path.join(__dirname, 'dist'),
//         "compress": true,
//         "open": true,
//         "port": 9000 
//     },
//     "plugins": [
//         new extractTextPlugin('styles/index.css'),
//         new htmlWebpackPlugin({
//             template: './src/index.html'
//         })
//     ]
// };

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['@babel/react']
                        }
                    }
                ]

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};