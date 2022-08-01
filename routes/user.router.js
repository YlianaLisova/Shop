const {userController} = require("../controllers");
const {userMiddleware} = require("../middlewares");
const router = require('express').Router();


router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

router.get('/:id',userMiddleware.isUserPresent, userController.getUserById);
router.put('/:id', userMiddleware.isUserPresent, userController.updateUser);
router.delete('/:id',userMiddleware.isUserPresent, userController.deleteUserById);

module.exports = router;
