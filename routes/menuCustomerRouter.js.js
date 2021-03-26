const express = require('express')
const router = express.Router()
const MenuCustomerController = require('../controllers/MenuCustomerController')
const UserController = require('../controllers/UserController')
const isLogin = require('../middleware/isLogin')

router.get('/menuuser',isLogin, MenuCustomerController.findAll)

router.post('/menuuser/buy', MenuCustomerController.buy)

router.get('/menuuser/buyList',isLogin, MenuCustomerController.buyList)

router.get('/menuuser/deleteBuyList',isLogin, MenuCustomerController.deleteBuyList)

router.get('/menuuser/logOutUser',isLogin, UserController.logout)


module.exports = router