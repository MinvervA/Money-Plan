const express = require('express')
const Router = express.Router()

// ini import dari folder controller, yang bernama usersController
const { userController } = require('../controller') 

Router.get('/', userController.get)
module.exports = Router
