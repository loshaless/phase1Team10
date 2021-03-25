const isLogin = (req, res, next) => {
    if (req.session.user_name) {
        next()
    }
    else {
        res.render('error.ejs')
    }
}

module.exports = isLogin