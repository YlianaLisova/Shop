const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    isUserAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
}, {timestamps: true})

module.exports = model('user', UserSchema)
