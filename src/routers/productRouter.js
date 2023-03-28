const express = require("express");
const productRouter = express.Router();
const { addProduct,getAll, getOne, deleteProduct } = require("../Controller/Product/productController");


// add product router
productRouter.post("/add",addProduct);
productRouter.get("/",getAll);
productRouter.get("/:id",getOne);
productRouter.delete("/:id",deleteProduct)



module.exports =  productRouter ;