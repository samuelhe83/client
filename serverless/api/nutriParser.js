const axios = require('axios');
const API = require('../env/index.js');

module.exports = {
  post: function(arr, query) {
    axios.post({
      url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': API.app_id,
        'x-app-key': API.api_key
      },
      body: {
        "query": query,
        "timezone": "US/Eastern"
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
  },

}