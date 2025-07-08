const express = require('express');
const router = express.Router();

const {authorizeRoles, authenticateUser} = require('../middleware/auth');
const { getAllProducts } = require('../controllers/storeControllers')

router.get('/getAllProducts', authenticateUser, getAllProducts)


module.exports = router;
