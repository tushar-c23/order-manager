const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    type: String
});

UserSchema.plugin(passportLocalMongoose);

//Status Number contains 1/2/3 3 stages.

module.exports = mongoose.model('User', UserSchema);