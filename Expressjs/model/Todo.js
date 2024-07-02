const mongoose = require("mongoose");

// status = Todo (default), In Progress, Done ( Enum )
// Create, Update
const todoSchema = new mongoose.Schema({
  title: String,
  image: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

const Todo = mongoose.model("Todos", todoSchema);
module.exports = Todo;
//