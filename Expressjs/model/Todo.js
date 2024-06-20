const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
});

const Todo = mongoose.model("Todos", todoSchema);
module.exports = Todo;