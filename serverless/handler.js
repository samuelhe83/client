'use strict';

const chatHandler = require('./chat/handler.js').handler;

module.exports.index = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
    },
    body: JSON.stringify({
      message: 'Hello!',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.webhook = (event, context, callback) =>
  chatHandler(event, context, callback)


module.exports.run = (event, context) => {
  const time = new Date();

  console.log('Cron job running!');

};
