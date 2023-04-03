const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");


const secret = 'test';


const getUsers=async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json("Something went wrong")
    }
}

const signup = async(req,res)=>{
    const {name, email, password, phone} = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({name, email, password: hashedPassword, phone });
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
}
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const oldUser = await User.findOne({ email });
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
      const token = jwt.sign({user:oldUser}, secret, { expiresIn: 60*60 });
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
}





module.exports={getUsers,signup,signin}