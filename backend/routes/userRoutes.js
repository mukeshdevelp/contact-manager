const express = require('express')

const router = express.Router()

router.post('/register', (req,res) => {
    res.status(200).json({"message": "register page"})
});

router.post('/login', (req,res) => {
    res.status(200).json({"message": "login page"})
});
router.get('/current', (req,res) => {
    res.status(200).json({"message": "current user page"})
});

module.exports = router;