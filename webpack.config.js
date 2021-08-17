const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: [
        "webpack/hot/only-dev-server",
        "./index.js"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules:[
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        {
            test: /\.html$/,
            use: "html-loader"
        },
        /*Choose only one of the following two: if you're using 
        plain CSS, use the first one, and if you're using a
        preprocessor, in this case SASS, use the second one*/
        {
            test: /\.css$/,
            //right to left, css-loader load the css file; style-loader inject style in page
            use: ["style-loader", "css-loader"],
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
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
}