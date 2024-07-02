const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "todo", "done"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todos", todoSchema);
module.exports = Todo;