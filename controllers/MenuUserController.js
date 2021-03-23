const {FoodUser} = require('../models')

class MenuUserController{
    static findAll(req, res) {
        FoodUser.findAll({
            order: [['id', 'ASC']]
        })
            .then(data => {
                res.render('menuForUser.ejs', { data: data })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = MenuUserController