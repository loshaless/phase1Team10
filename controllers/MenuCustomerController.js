const { User, Food, UserFood } = require('../models')

class MenuUserController {
    static findAll(req, res) {
        Food.findAll({
            order: [['id', 'ASC']]
        })
            .then(data => {
                res.render('menuForUser.ejs', { data: data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static buy(req, res) {
        User.findAll({ include: [Food] })
            .then(data => {
                console.log(req.session);
                res.send(String(req.session))
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = MenuUserController