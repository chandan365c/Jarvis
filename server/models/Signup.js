const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true},
        phone: {type: Number, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    }
);

const UserModel = mongoose.model("Credentials", UserSchema)

module.exports = UserModel