const axios = require('axios').default;

export default function Api () {
  return axios.get('https://opentdb.com/api.php?amount=10')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
     console.log(error);
   });
 }
