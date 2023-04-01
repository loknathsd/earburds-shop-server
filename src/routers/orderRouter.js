const express = require("express");
const { addOrder, getAll, deleteOrder } = require("../Controller/orderController");
const orderRouter = express.Router();

orderRouter.post("/add",addOrder);
orderRouter.get("/",getAll);
orderRouter.delete("/:id",deleteOrder);

module.exports=orderRouter;