const express = require('express')
const router = express.Router()
const MenuCustomerController = require('../controllers/MenuCustomerController')

router.get('/menuuser', MenuCustomerController.findAll)

router.post('/menuuser/buy', MenuCustomerController.buy)

router.get('/menuuser/buyList', MenuCustomerController.buyList)

module.exports = router