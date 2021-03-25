const express = require('express')
const path = require('path')
const app = express()
const router = require('./routes')
const port = 3000
var session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/public')))
app.use('/', router)

app.listen(port, () => {
    console.log(`listening in port ${port}`);
})