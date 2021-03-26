const isLogin = (req, res, next) => {
    if (req.session.isLogin == 'user') {
        next()
    }
    else {
        res.redirect('/login')
    }
}

module.exports = isLogin