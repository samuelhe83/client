const accessToken = 'EAAEvFFNRaBMBADq6JBuf2hcZCZC2HOeZAEuoPfJCUMeNPKxPZBvKByjFucL1vmkakhcdJIVH8je8XQBI7cqXPJm9c6CuGF9TK77NMtcopEWjN8nJqdOzlPuIsJuH4PZCk1UQHeqD6COKJ3LZBwAHkRurJoKLz1GIFfTgzocstFZAAZDZD';
const axios = require('axios');

module.exports.handler = (event, context, callback) => {
  if (event.method === 'GET') {
      if (event.query['hub.verify_token'] === 'openToken' && event.query['hub.challenge']) {
        return callback(null, parseInt(event.query['hub.challenge']));
      } else {
        return callback('Invalid token');
      }
    }

    if (event.method === 'POST') {
      event.body.entry.map((entry) => {
      entry.messaging.map((messagingItem) => {
        if (messagingItem.message && messagingItem.message.text) {
          const url = `https://graph.facebook.com/v2.6/me/messages?access_token=${accessToken}`;
          const payload = {
            recipient: {
              id: messagingItem.sender.id
            },
            message: {
              text: 'Here are the paleo friendly meals nearby:'
            }
          };
          axios.post(url, payload).then((response) => callback(null, response));
        }
      });
    });

    }
}
