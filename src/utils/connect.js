const { default: mongoose } = require("mongoose");

 const connection = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('mongoose is connected')
      } catch (error) {
        console.log(error)
      }
}
module.exports = {connection}
