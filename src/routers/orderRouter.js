const express = require("express");
const { addOrder } = require("../Controller/orderController");
const orderRouter = express.Router();

orderRouter.post("/",addOrder);

module.exports=orderRouter;