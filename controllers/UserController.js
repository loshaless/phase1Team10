const {User} = require('../models')

class UserController{
    static registerForm(req, res) {
        res.render('register.ejs')
    }
    static registerAdd(req, res) {
        let newData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            handphone_number: req.body.handphone_number,
            role: req.body.role
        }
        User.create(newData)
            .then((data) => {
                res.send('success')
            })
            .catch((err) => {
                res.send(err)
        })
    }

    static login(req, res) {
       res.render('login.ejs')
    }

    static loginPost(req, res) {
        User.findOne({ where: { user_name: req.body.user_name } })
        .then((data) => {
            if (data.role === 'admin' && data.password === req.body.password) {
                res.redirect('menuadmin')
            }
            else if (data.role === 'customer' && data.password === req.body.password) {
                res.send('ini customer')
            } else {
                res.send('wrong password / username')
            }
        })
        .catch(() => {
                res.send('wrong username/password')
        })
    }
}

module.exports = UserController