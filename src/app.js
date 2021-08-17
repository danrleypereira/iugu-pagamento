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