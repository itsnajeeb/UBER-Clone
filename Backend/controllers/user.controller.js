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
    console.log(req.body);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log("Password ",hashedPassword);
    
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        passowrd: hashedPassword
    });
    const token = user.generateAuthToken();
    res.status(201).json({ token, user })
}
