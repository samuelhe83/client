'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const axios = require('axios');
const API = require('./env/index.js');

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/restaurants', (req, res) => {
  const response = {
    "restaurants": [
               {
                 "title": "Emerald Curry"
               },
               {
                 "title": "Panang King"
               },
               {
                 "title": "Chicken Master"
               },
               {
                 "title": "Silver Meal"
               },
               {
                 "title": "Hooters"
               },
               {
                 "title": "Portos"
               }
    ]
  }
  res.status(200).send(response);
});

// Nutritionix API Call
app.post('/nutri', (req, res) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': API.app_id,
      'x-app-key': API.api_key
    }
  };

  axios.post("https://trackapi.nutritionix.com/v2/natural/nutrients", {
    "query": req.body.query,
    "timezone": "US/Eastern"
  }, config)
  .then(function (response) {
    // console.log(response.data);
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
});

// const chatHandler = require('./chat/handler.js').handler;
// const nutri = require('./api/nutriParse.js');

// module.exports.webhook = (event, context, callback) => {
//   return chatHandler(event, context, callback);
// };

// module.exports.run = (event, context) => {
//   const time = new Date();

//   console.log('Cron job running!');

// };

// module.exports.nutriParser = (event, context, callback) => {
//   nutri(event, context, callback);
// };


app.listen(PORT, () => {
  console.log(chalk.red(`Client on ${PORT}!`));
});
