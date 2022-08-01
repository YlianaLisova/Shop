const {userService} = require("../services");
module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers(req.params).exec();

            res.json(users);
        } catch (e) {
            next(e);
        }

    },

    getUserById: async (req, res, next) => {
        try {
            const {user} = req;

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try{
            const user = await userService.createUser({...req.body});

            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            const {id} = req.params;

            await userService.deleteUserById({_id: id});

            res.status(204).json('User was deleted');
        }catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try{
            const {id} = req.params;

            const updatedUser = await userService.updateUserById({_id:id}, req.body)

            res.json(updatedUser);
        } catch (e) {
            next(e);
        }
    }
}
