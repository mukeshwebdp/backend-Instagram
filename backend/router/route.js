const express = require('express')
const {signup,success,login,loginP,failed} = require('../controller/controller')
const route = express.Router();

route.post('/Signup',signup)
route.get('/success',success)
route.get('/failed',failed)
route.get('/login',login)
route.post('/login',loginP)
module.exports = route;