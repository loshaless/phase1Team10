const express = require('express')
const router = express.Router()
const MenuCustomerController = require('../controllers/MenuCustomerController')

router.get('/menuuser', MenuCustomerController.findAll)

module.exports = router