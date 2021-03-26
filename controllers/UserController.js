const { User } = require('../models')
const {comparePassword} = require('../helper/bcrypt')

class UserController{
    static registerForm(req, res) {
        res.render('register.ejs')
    }
    static registerAdd(req, res) {
        let newData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user_name: req.body.user_name,
            password: req.body.password,
            address: req.body.address,
            handphone_number: req.body.handphone_number,
            role: req.body.role
        }
        User.create(newData)
            .then((data) => {
                res.render('successRegister.ejs')
            })
            .catch((err) => {
                res.send(err)
        })
    }

    static login(req, res) {
       res.render('login.ejs')
    }

    static loginAdmin(req, res) {
        User.findOne({
            where: { user_name: req.body.user_name }
        })
            .then((data) => {
           
                let password = data.password
                const valid = comparePassword(req.body.password, password)
        
                if (valid) {
                    req.session.userId = data.id
                    req.session.isLogin = data.role
                    res.redirect('/menuadmin')
                } else {
                    res.send('errors')
                }
            })
            .catch((err) => {
            res.send(err)
        })
    }

    // static loginPost(req, res) {
    //     User.findOne({
    //         where: { user_name: req.body.user_name }
    //     })
    //         .then((data) => {
    //            let password = data.password
    //             if (comparePassword(req.body.password, password)) {
    //                 req.session.userId = data.id
    //                 res.redirect('/menuuser')
    //             } else {
    //                 res.send('errors')
    //             }
    //         })
    //         .catch((err) => {
    //         res.send(err)
    //     })
    // }
}

module.exports = UserController