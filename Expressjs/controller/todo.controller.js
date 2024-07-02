const NotFoundError = require("../errors/not-found.error");
const Todo = require("../model/Todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json({
    data: todos,
  });
};

const getTodo = async (req, res) => {
  const { id: _id } = req.params;
  const { id: user } = req.user;
  const todo = await Todo.findOne({ _id, user });
  if (!todo) throw new NotFoundError("Todo not found.");
  res.json({
    data: todo,
  });
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  console.log(req.file);
  await Todo.create({ title, user: req.user.id, image: req.file.path });
  res.json({
    message: "Todo successfully added.",
  });
};

const deleteTodo = async (req, res) => {
  const { id: _id } = req.params;
  const { id: user } = req.user;

  await Todo.deleteOne({ _id, user });
  res.json({
    message: "Todo deleted successfully.",
  });
};

const updateTodo = async (req, res) => {
  const { title } = req.body;
  const { id: _id } = req.params;
  const { id: user } = req.user;

  await Todo.updateOne({ _id, user }, { title });
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
