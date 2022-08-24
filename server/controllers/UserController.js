const db = require('../models')


// create main Model
const User = db.users

// main work

// 1. create User

const addUser = async (req, res) => {
    console.log(req.body)
    // let info = {
    //     image: req.file.path,
    //     title: req.body.title,
    //     price: req.body.price,
    //     description: req.body.description,
    //     published: req.body.published ? req.body.published : false
    // }

    const user = await User.create(req.body)
    res.status(200).send(user)
    console.log(user)

}



// 2. get all Users

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}


module.exports = {
    addUser,
    getAllUsers,
   
    
}