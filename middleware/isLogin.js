const isLogin = (req, res, next) => {
    if (req.session.user_name) {
        next()
    }
    else {
        res.redirect('/login')
    }
}

module.exports = isLogin