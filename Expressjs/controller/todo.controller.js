const Todo = require("../model/Todo");
const NotFoundError = require("../errors/custom.error");
const getTodos = async (req, res) => {

  const todos = await Todo.find();
  res.json({
    data: todos,
  });
};

const getTodo = async (req, res) => {
  const { id: _id } = req.params;
  const{ id : user } = req.user;
  const todo = await Todo.findOne({ _id , user });
  res.json({
    data: todo,
  });
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  const { user } = req.user;
  await Todo.create({ title, user });
  res.json({
    message: "Todo successfully added.",
  });
};

const deleteTodo = async (req, res) => {
  const { id: _id } = req.params;
  const { id : user} = req.user;
  await Todo.deleteOne({ _id , user });
  res.json({
    message: "Todo deleted successfully.",
  });
};

const updateTodo = async (req, res) => {
  const { title } = req.body;
  const { id: _id } = req.params;
  const { id : user } = req.user;
  await Todo.updateOne({ _id , title , user });
  res.json({
    message: "Todo edited successfully",
  });
};

module.exports = {
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
};