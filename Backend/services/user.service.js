const userModel = require('../models/user.model')

module.exports.createUser = async ({ firstname, lastname, email, passowrd }) => {
    if (!firstname || !email || !passowrd) {
        throw new Error("All filleds are required");
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        passowrd
    })
    return user
}