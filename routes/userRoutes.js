const express = require('express')
const router = express.Router()

const { registerUser, login, logout } = require('../controllers/userControllers');

router.post("/register", registerUser)
router.post("/login", login)
router.post("/logout", logout)

module.exports = router;