const express = require("express");
const userRouter = express.Router();
const {getUsers,signin,signup} = require("../Controller/userController");

userRouter.post("/signup",signup);
userRouter.post('/signin',signin);
userRouter.get('/',getUsers)


module.exports = userRouter;