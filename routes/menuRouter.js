const express = require('express')
const router = express.Router()
const MenuController = require('../controllers/MenuController.js')

router.get('/menuadmin', MenuController.findAll)
router.get('/menuadmin/add', MenuController.menuShowAdd)
router.post('/menuadmin/add', MenuController.menuAdd)
router.get('/menuadmin/delete/:id', MenuController.deleteMenu)
router.get('/menuadmin/edit/:id', MenuController.getEditMenu)
router.post('/menuadmin/edit/:id', MenuController.postMenu)


module.exports = router