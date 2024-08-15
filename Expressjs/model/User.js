const mongoose = require("mongoose");

// Add more fields in users, position , bio
// signup
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profileImage: String,
  email: String,
  password: String,
  roles: [String], // ["Admin", "Customer"]
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
