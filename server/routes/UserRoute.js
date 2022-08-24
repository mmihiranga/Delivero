// import controllers review, products
const userController = require('../controllers/UserController.js')

// router
const router = require('express').Router()


// use routers
router.post('/addUser', userController.addUser)
router.get('/getAllUsers', userController.getAllUsers)
router.post('/validate', userController.validate)
router.post('/getUser', userController.getUserByEmail)


module.exports = router