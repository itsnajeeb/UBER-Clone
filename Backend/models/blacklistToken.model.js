const mongoose = require('mongoose');

const blacklistToken = new mongoose.Schema({
    token:
    {
        type: String,
        require: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expire: 86400,  //24 hour in second
    }
})

module.exports = mongoose.model('BlacklistToken', blacklistToken)