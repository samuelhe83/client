const express = require('express');
const chalk = require('chalk');
const handlers = require('./handler.js');

const app = express();
const PORT = 8080;

handlers.index(null, null, function(err, respond) {
  console.log(respond);
});

app.listen(PORT, () => {
  console.log(chalk.yellow(`Client on ${PORT}!`));
});
