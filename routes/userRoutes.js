const express = require('express')
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", login)
router.post("/logout", logout)