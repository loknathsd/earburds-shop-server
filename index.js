const express = require("express");
const productRouter = require("./src/routers/productRouter");
const { connection } = require("./src/utils/connect");
require('dotenv').config()
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//mongoose connections

function main(){
    connection();
 }
 main()

//  routing

app.get("/",(req,res)=>res.send('hello world'))

app.use("/product",productRouter)



app.listen(5000,()=>console.log("server running"))

