// const express = require("express");
// const app = express();
// const path = require("path");
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//    console.log(`The app server is running on port: ${port}`);
// });

// const DIST_DIR = path.join(__dirname, "dist");
// const HTML_FILE = path.join(DIST_DIR, "index.html");

// app.use(express.json());
// app.use(express.static("public"));
// app.use(express.static("dist"));

// app.get("/", (req, res) => {
//    res.sendFile(HTML_FILE, function(err){
//       if(err){
//          res.status(500).send(err);
//       }
//    });
// });
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});

// const compiler = webpack({
//   entry: ['whatwg-fetch', path.resolve(__dirname, 'js', 'app.js')], 
//   module: {
//     loaders: [
//       {
//         exclude: /node_modules/, 
//         test: /\.js$/, 
//         loader: 'babel',
//       },
//     ],
//   },
//   output: {filename: 'app.js', path: '/'}, 
// });

// const app = new WebpackDevServer(compiler, {
//   contentBase: '/public/', 
//   proxy: {'/graphql': `http://localhost:${GRAPHQL_PORT}`},
//   publicPath: '/js/',
//   stats: {colors: true}, 
// });

// app.use('/', express.static(path.resolve(__dirname, 'public')));