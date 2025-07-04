const express = require('express');
const router = express.Router();

const {registerUser, loginUser, getAllUsers, getUserProfile} = require('../controllers/userControllers');

const {authorizeRoles, authenticateUser} = require('../middleware/auth');

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAllUsers', getAllUsers)

// Private Routes
router.get('/profile', authenticateUser, getUserProfile);
// router.get('/', authenticateUser, authorizeRoles('admin'), getAllUsers);


module.exports = router;
