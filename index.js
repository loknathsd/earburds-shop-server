const express = require("express");
const cors = require("cors")
const productRouter = require("./src/routers/productRouter");
const { connection } = require("./src/utils/connect");
const orderRouter = require("./src/routers/orderRouter");
require('dotenv').config()

const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//mongoose connections

function main(){
    connection();
 }
 main()

//  routing

app.get("/",(req,res)=>res.send('hello world'))

app.use("/product",productRouter);
app.use("/order",orderRouter);



app.listen(5000,()=>console.log("server running"))

