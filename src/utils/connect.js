const   mongoose  = require("mongoose");

 const connection = async()=>{
  mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
}
module.exports = {connection}
