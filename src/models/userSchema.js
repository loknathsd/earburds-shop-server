const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      confirmPassword: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;