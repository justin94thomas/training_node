const axios = require('axios');

// // Fetch all users
// axios.get('http://localhost:5000/api/users/getAllUsers')
//   .then(response => {
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error.response?.data || error.message);
//   });

// // Register a new user
// let data = { "name": "Justin Thomas", "password": "password", "email": "justin19.94thomas@gmail.com", "role": "role-admin" }
// axios.post('http://localhost:5000/api/users/register', data)
//   .then(res => {
//     console.log('response', res.data);
//   }).catch(error => {
//     console.error('Error:', error.response?.data || error.message);
//   });


// // login user
// let data = {email: "justin19.94thomas@gmail.com", password: "password"}
// axios.post('http://localhost:5000/api/users/login', data)
//   .then(res => {
//     console.log('response', res.data);
//   }).catch(error => {
//     console.error('Error:', error.response?.data || error.message);
//   });
