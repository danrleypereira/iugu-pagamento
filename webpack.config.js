const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: [
        'babel-polyfill',
        "webpack/hot/only-dev-server",
        "./index.js"
    ],
    output: {
        filename: "[name].[fullhash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules:[
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: {
                loader: 'babel-loader',
                // loader: 'source-map-loader'
            }
        },
        {
            test: /\.html$/,
            use: "html-loader"
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [
                {
                    loader: 'url-loader', 
                    options: {
                        limit: 15000,
                        encoding: 'base64',
                        name: `static/images/[name].[hash:8].[ext]`
                    }
                }
            ]
        },
        /*Choose only one of the following two: if you're using 
        plain CSS, use the first one, and if you're using a
        preprocessor, in this case SASS, use the second one*/
        {
            test: /\.css$/,
            //right to left, css-loader load the css file; style-loader inject style in page
            use: [
                // {
                //     loader: 'url-loader', 
                //     options: {
                //         limit: 15000,
                //         encoding: 'base64',
                //         name: `static/styles/[name].[hash:8].[ext]`
                //     }
                // },
                isDevMode ? "style-loader" : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"
                    }
                },
                {
                    loader: "css-loader"
                }
            ],
        },
        //   {
        //     test: /\.scss$/,
        //     use:[
        //       "style-loader",
        //       "css-loader",
        //       "sass-loader"
        //     ],
        //   },
        ],
    },  
    plugins: [
        new HTMLWebpackPlugin({
        template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '__[name]__.[fullhash:8].css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        historyApiFallback: true
    }
}