const express = require("express");
require("express-async-errors");
const { query, validationResult } = require("express-validator")
const connectDb = require("./express-todo/config/db");
const todoRoutes = require("./routes/todo.route");
const todoViewRoutes = require("./routes/todo.view.route");
const authRoutes = require("./routes/auth.route");
const NotFoundError = require("./errors/not-found.error");
const CustomError = require("./errors/custom.error");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();

// => /hello?person=sirish
app.get('/hello', query('person').notEmpty(), (req, res) => {
  const reqWithErrors = validationResult(req);
  console.log(reqWithErrors.array())
  if (reqWithErrors.array().length === 0) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: reqWithErrors.array() });
});


app.use("/api/todos", todoRoutes);
app.use("/view/todo", todoViewRoutes);
app.use("/api/auth", authRoutes);

app.all("*", (req, res) => {
  throw new NotFoundError("Route not found.");
});

app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      messages: err.serializeErrors(),
    });
    return;
  }

  console.log(err);
  res.status(500).json({
    message: "Internal Server Error.",
  });
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});