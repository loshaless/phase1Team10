const { User, Food, FoodUser } = require('../models')

class MenuUserController {
    static findAll(req, res) {
        Food.findAllOrderedByPrice()
            .then(data => {
                res.render('menuForUser.ejs', { data: data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static buy(req, res) {
        let result = []
        // res.send(req.body);
        for (let i = 0; i < req.body.foodAmount.length; i++) {
            result.push({ foodId:  req.body.id[i], userId: req.session.userId, foodAmount: req.body.foodAmount[i] })
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
        User.findOne({ include: [Food], where: { id: req.session.userId} })
            .then(data => {
                // res.send(data)   
                res.render('buyList', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static deleteBuyList(req,res){
        FoodUser.destroy({where:{userId : req.session.userId}})
        .then(()=>{
            res.redirect('/menuuser')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = MenuUserController