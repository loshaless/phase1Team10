const express = require('express')
const router = express.Router()
const access = require('./accessRouter')
const menuAdmin = require('./menuRouter')
const user = require('./userROuter')

router.get('/', (req, res) => {
    res.send('tes')
})

router.use(access)
router.use(menuAdmin)
router.use(user)



module.exports = router