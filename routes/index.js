const express = require('express')
const router = express.Router()
const menuAdmin = require('./menuAdminRouter')
const menuCustomerRouter = require('./menuCustomerRouter.js')
const user = require('./userRouter')

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.use(menuAdmin)
router.use(menuCustomerRouter)
router.use(user)

module.exports = router