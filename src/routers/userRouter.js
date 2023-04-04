const express = require("express");
const userRouter = express.Router();
const { getUsers, signin, signup, deleteUser } = require("../Controller/userController");

userRouter.post("/signup", signup);
userRouter.post('/signin', signin);
userRouter.get('/', getUsers);
userRouter.delete('/:id', deleteUser);


module.exports = userRouter;