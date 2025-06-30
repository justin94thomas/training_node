const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());

// //Routes
app.use('/api/users', userRoutes);

//endpoints
app.get('/', (req, res)=>{
    res.send('Node.js APIs are running');
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`)
})