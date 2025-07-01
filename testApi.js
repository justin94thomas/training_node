const axios = require('axios');

axios.get('http://localhost:5000/api/users/getAllUsers')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response?.data || error.message);
  });
