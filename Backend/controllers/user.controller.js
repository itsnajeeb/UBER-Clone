const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

module.exports.registerUser = async (req, res, next) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() })
    }

    const { fullname, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
    const token = user.generateAuthToken();
    res.status(201).json({ token, user })
}

module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ errors: [{ msg: 'Invalid Email or Password' }] })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ errors: [{ msg: 'Invalid Password or Password' }] })
    }
    const token = user.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({ token, user })
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

