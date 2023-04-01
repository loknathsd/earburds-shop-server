const Orders = require("../models/ordersSchema");

const addOrder = async(req,res)=>{
    try {
        const order = new Orders(req.body);
        await order.save();
        res.status(200).json({message:"Order successful"});
    } catch (e) {
        console.log(e)
        res.status(500).json({message:"Order failed !!"})
    }
}
const getAll= async(req,res)=>{
   try {
    const orders = await Orders.find();
    res.status(200).json(orders)
   } catch (e) {
    res.status(500).json({message:"Something went wrong"})    
   }
}
const deleteOrder = async(req,res)=>{
    try {
        await Orders.deleteOne({_id:req.params.id})
        res.status(200).json("Order is deleted Successfully !!")
    } catch (e) {
        res.status(500).json("Something went wrong")
    }
}

module.exports ={ addOrder,getAll,deleteOrder}