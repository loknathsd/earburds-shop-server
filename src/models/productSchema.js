const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    imgUrl:String,
    name:{
        type:String,
       required:true
    },
    price :{
        type:Number,
        required:true
    },
    // date: { type: Date, default: Date.now },
})

const Product = mongoose.model("Product",productSchema);
module.exports=Product;