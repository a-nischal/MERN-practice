const express = require("express");
const router = express.Router();
const Todo = require("../model/Todo");

// Index Page
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.render("index", { todos, search: null });
});

// Create a new todo and saves it in mongodb
router.post("/", async (req, res) => {
  const { title } = req.body;
  await Todo.create({ title });
  res.redirect("/view-todo");
});

// Deletes the speceified todo from mongodb
router.post("/delete/:id", async (req, res) => {
  const { id: _id } = req.params;
  await Todo.deleteOne({ _id });
  res.redirect("/view-todo");
});

// Finds the specified todo and render edit todo page
router.get("/edit/:id", async (req, res) => {
  const { id: _id } = req.params;
  await Todo.findOne({ _id });
  res.render("edit", {
    id,
    todo,
  });
});

router.post("/edit/:id", async (req, res) => {
  await Todo.updateOne({ _id: req.params.id }, { title: req.body.todo });
  res.redirect("/view-todo");
});

module.exports = router;