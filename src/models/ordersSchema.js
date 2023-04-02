const { Schema, default: mongoose } = require("mongoose");

const ordersSchema = new Schema({
    fullname:{
        type:String,
       required:true
    },
    email :{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required: true
    },
    cardnumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    totalprice:{type:Number},
    products:[]
})

const Orders = mongoose.model("Orders",ordersSchema);
module.exports=Orders;