const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const dotenv = require('dotenv')
dotenv.config();

// Register User
const registerUser = async(req, res) => {
    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: cryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS
        ).toString()
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}


//Login User