const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/seed', userController.seedUsers);
userRouter.post('/signin', userController.signinUser);
userRouter.post('/register', userController.registerUser);

// userRouter.get('/', userController.getUsers);
// userRouter.get('/:id', userController.getUser);




module.exports = userRouter;