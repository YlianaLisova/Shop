const User = require('../models/User');

module.exports = {
    getAllUsers: (params = {}) => {
        return User.find(params)
    },
    getUserById: (params = {}) => {
        return User.findOne(params)
    },
    createUser: (user) => {
        return User.create(user);
    },
    deleteUserById: (params = {}) => {
        return User.deleteOne(params);
    },
    updateUserById: (params, userData, options = {new: true}) => {
        return User.findOneAndUpdate(params, userData, options)
    }
}
