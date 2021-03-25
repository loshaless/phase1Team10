const isAdmin = (req, res, next) => {
    if (req.session.user_name === 'admin') {
        next()
    }
    else if(req.session.user_name !== 'admin') {
        res.redirect('/menuuser')
    }
}

module.exports = isAdmin