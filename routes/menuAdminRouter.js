const express = require('express')
const router = express.Router()
const MenuAdminController = require('../controllers/MenuAdminController.js')

router.get('/menuadmin', MenuAdminController.findAll)
router.get('/menuadmin/add', MenuAdminController.menuShowAdd)
router.post('/menuadmin/add', MenuAdminController.menuAdd)
router.get('/menuadmin/delete/:id', MenuAdminController.deleteMenu)
router.get('/menuadmin/edit/:id', MenuAdminController.getEditMenu)
router.post('/menuadmin/edit/:id', MenuAdminController.postMenu)


module.exports = router