const express = require('express')
const router = express.Router()
const MenuCustomerController = require('../controllers/MenuCustomerController')

router.get('/menuuser', MenuCustomerController.findAll)

router.post('/menuuser/buy', MenuCustomerController.buy)

module.exports = router