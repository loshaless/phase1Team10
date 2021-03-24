const express = require('express')
const path = require('path')
const app = express()
const router = require('./routes')
const port = 3000

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/public')))
app.use('/', router)

app.listen(port, () => {
    console.log(`listening in port ${port}`);
})