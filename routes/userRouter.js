const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')

router.get('/register', UserController.registerForm)
router.post('/register', UserController.registerAdd)
router.get('/login', UserController.login)
router.post('/login', UserController.loginPost)





module.exports = router