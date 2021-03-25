const { User, Food, FoodUser } = require('../models')

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
        let result = []
        for (let i = 0; i < req.body.foodAmount.length; i++) {
            result.push({ foodId: i + 1, userId: req.session.userId, foodAmount: req.body.foodAmount[i] })
        }
        FoodUser.bulkCreate(result)
            .then(() => {
                res.redirect('/menuuser/buyList')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static buyList(req, res) {
        User.findOne({ include: [Food], where: { id: req.session.userId } })
            .then(data => {
                // res.send(data)
                res.render('buyList', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = MenuUserController