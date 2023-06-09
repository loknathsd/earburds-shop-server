const Product = require('../../models/productSchema');

//add product
const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json({ message: "Product is added Successfully !" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Product added failed" })
    }
}
//get all products
const getAll = async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server Failed" })
    }
}
//get single product
const getOne = async (req, res) => {
    try {
        const data = await Product.find({ _id: req.params.id });
        res.status(200).json({ result: data, message: "Success" })
    } catch (e) {
        console.log(e);
        throw new Error("Something went wrong")
    }
}
const updateProduct = async (req,res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedProduct = await Product.findOneAndUpdate({ _id: productId }, updatedData);
      res.status(200).json({ message: 'Product updated successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update product' });
    }
  };
//delete product
const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Product is deleted Successfully !!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Product is not deleted . failed !" })
    }
}
module.exports = { addProduct, getAll, getOne, updateProduct, deleteProduct }