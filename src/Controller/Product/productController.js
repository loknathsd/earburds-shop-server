

const Product = require('../../models/productSchema');

//add product
const addProduct = async (req, res) => {
    console.log('productcontroller')
    try {
        const data = req.body;
        const newPd = new Product({
            name: data.name,
            image: data.image,
            price: data.price
        })
      await newPd.save();
      res.status(200).json({message:"Product is added Successfully !"});

    } catch (e) {
        console.log(e);
        res.status(500).json({message:"Product added failed"})
    }
}
//get all products
const getAll = async (req, res) => {
    console.log('get all data');
    try {
        await Product.find().exec((data)=>{
            res.status(200).json({result:data})
        })
       
    } catch (e) {
        console.log(e);
       res.status(500).json({message:"Server Failed"})
    }

}

//get single product

const getOne = async (req, res) => {
    try {
        const data = await Product.find({_id:req.params.id});
        res.status(200).json({result:data,message:"Success"})

    } catch (e) {
        console.log(e);
        throw new Error("Something went wrong")
    }
}

const update=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

const deleteProduct =async(req,res)=>{
    try {
        await Product.deleteOne({_id:req.params.id});
        res.json(200).json({message:"Product is deleted Successfully !!"})
        
    } catch (e) {
        console.log(e);
        res.status(500).json({message:"Product is not deleted . failed !"})
        
    }

}





module.exports = { addProduct, getAll,getOne,update,deleteProduct }