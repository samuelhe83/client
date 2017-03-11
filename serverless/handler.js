'use strict';

const chatHandler = require('./chat/handler.js').handler;

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
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
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
