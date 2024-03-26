const express = require('express')
const bodyParser = require('body-parser')
const route = require('./router/route')
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended: true}));


app.use('/',route)
app.get('/',(req,res)=>{
    res.render('index')
})

module.exports = app;