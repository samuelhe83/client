'use strict';

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

module.exports.webhook = (event, context, callback) => {
  if (event.method === 'GET') {
   if (event.query['hub.verify_token'] === 'openToken' && event.query['hub.challenge']) {
      return callback(null, parseInt(event.query['hub.challenge']));
    } else {
      return callback('Invalid token');
    }
  }
}


module.exports.run = (event, context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
