const {userService} = require("../services");
const CustomError = require("../errors/CustomError");


module.exports = {
    isUserPresent: async (req, res, next) => {
        try{
            const {id} = req.params;

            const user = await userService.getUserById({_id: id});

            if (!user) {
                return next(new CustomError('User not found', 400))
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    }
}
