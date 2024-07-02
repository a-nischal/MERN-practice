const NotFoundError = require("../errors/not-found.error");
const Todo = require("../model/Todo");

const getTodos = async (req, res) => {
  const { search, limit, page, status } = req.query;
  const regex = new RegExp(search);
  console.log({ status });
  const filter = {
    user: req.user.id,
    title: regex,
  };

  if (status?.length > 0) {
    filter.status = status;
  }

  const todos = await Todo.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const count = await Todo.countDocuments(filter);

  res.json({
    data: todos,
    count,
    page,
    totalPage: Math.ceil(count / limit),
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
  const { id: _id } = req.params;
  const { id: user } = req.user;

  await Todo.updateOne({ _id, user }, req.body);
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