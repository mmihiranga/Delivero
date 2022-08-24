const db = require('../models')
const bcrypt = require("bcryptjs");
const saltRounds = 5;

// create main Model
const User = db.users

// main work

// 1. create User

const addUser = async (req, res) => {
    console.log(req.body)
    if (await User.findOne({ where: { email: req.body.email } })) {
        res.status(409).send({ message: 'Email "' + req.body.email + '" is already registered'});
    }else{
        bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
            req.body.password = hash;
            const user = new User(req.body);
            await user.save().then((data) => {
                console.log(data);
                res.status(200).send(data);
                })
                .catch((err) => {
                console.log(err);
                res.send(err);
            });
            });
        });
    }

}


// 1.1 Validate

const validate = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        res.status(404).send({ message: 'User not found' })
    } else {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result) {
                res.status(200).send(user)
            } else {
                res.status(401).send({ message: 'Password is incorrect' })
            }
        }
        )
    }
}

// 2. get all Users

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

// 2.2 get User by email
const getUserByEmail = async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        res.status(200).send(null)
    } else {
        res.status(200).send(user)
    }
    
}


module.exports = {
    addUser,
    getAllUsers,
    validate,
    getUserByEmail
   
    
}