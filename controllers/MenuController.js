const {Food} = require('../models')

class MenuController{
     static findAll(req, res) {
        Food.findAll({
            order: [['id', 'ASC']]
        })
            .then(data => {
                res.render('menuForAdmin.ejs', { data: data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static menuShowAdd(req, res) {
        res.render('addMenuAdmin.ejs')
    }

    static menuAdd(req, res) {
        const menus = {
            food_name: req.body.food_name,
            price: req.body.price
        }
        Food.create(menus)
            .then((data) => {
                res.redirect('/menu')
            })
            .catch(err => {
                res.send(err)
        })
    }

    static deleteMenu(req, res) {
        let id = +req.params.id
        Food.destroy({
            where: { id: id}
        })
            .then(() => {
                res.redirect('/menu')
            })
            .catch((err) => {
            res.render(err)
        })
    }

    static getEditMenu(req, res) {
      let id = +req.params.id
        Food.findOne({
            where: {
                id: id
            }
        })
        .then((data) => {
           res.render(`editMenuAdmin.ejs`,{data: data})
        })
         .catch(err => {
            res.render(err)   
        })
    }

    static updateEditMenu(req, res) {
        let container = {
            food_name: req.body.name,
            price: req.body.price
        }
        Food.create(container)
            .then((data) => {
                res.redirect('/menu')
            })
            .catch((err) => {
                res.send(err)
        })
    }

    static postMenu(req, res) {
        let container = {
            food_name: req.body.food_name,
            price: req.body.price
        }
        let id = +req.params.id
        Food.update(container, {
             where: {
                id: id
            }
        })  
            .then((data) => {
                res.redirect('/menu')
            })
            .catch((err) => {
                res.send(err)
            })

    }
}

module.exports = MenuController