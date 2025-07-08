const express = require('express');
const {registerUser} = require('../controllers/userController');
const {loginUser} = require('../controllers/userController');
const {currentUser} = require('../controllers/userController');
const router = express.Router()

router.post('/register', registerUser);

router.post('/login', loginUser);
router.get('/current', currentUser);

module.exports = router;