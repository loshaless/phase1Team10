const express = require('express')
const router = express.Router()
const user = require('./userRouter')
const menu = require('./menuRouter')

router.get('/', (req, res) => {
    res.send('tes')
})

router.use(user)
router.use(menu)



module.exports = router