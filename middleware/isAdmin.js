const isAdmin = (req, res, next) => {

    if (req.session.user_name === 'admin') {
        next()
    }
    else {
        res.redirect('/')
    }
}

module.exports = isAdmin