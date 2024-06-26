const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  Role: String,
  Bio: String,
});

const User = mongoose.model("Users", userSchema);
module.exports = User;