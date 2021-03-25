const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')
const {User} = require('../models')
const secondMiddleWare = (req, res, next) => {
    if (req.body.user_name !== '' && req.body.password !== '') {
            return User.findOne({where:{user_name:req.body.user_name}})
       .then((data)=>{
            req.session.dataId = data.dataValues.id,
            req.session.user_name = req.body.user_name
        next()
       })
       .catch((err)=>{
           res.send(err)
       })
    }
    else {
        res.redirect('/')
    }
}



router.get('/register', UserController.registerForm)
router.post('/register', UserController.registerAdd)
router.get('/login', UserController.login)
router.post('/login', secondMiddleWare, UserController.loginAdmin)





module.exports = router