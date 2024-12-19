const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
            console.log('CONNECTED TO DB');
        }
    ).catch(err => console.log(err));

};
module.exports = connectToDB;