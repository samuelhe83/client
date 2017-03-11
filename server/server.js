const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();
const PORT = 8080;

const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require('../webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  stats: {
    chunks:false,
    colors: true,
  },
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('client'));

app.get('/bundle.js', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/bundle.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(chalk.red(`Client on ${PORT}!`));
});
