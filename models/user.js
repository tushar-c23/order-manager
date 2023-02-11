const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Username: String,
    Password: String,
    Type: String
})

//Status Number contains 1/2/3 3 stages.

module.exports = mongoose.model('User', UserSchema);