const express = require('express')
const router = express.Router()
const MenuUserController = require('../controllers/MenuUserController.js')

router.get('/menuuser', MenuUserController.findAll)



module.exports = router