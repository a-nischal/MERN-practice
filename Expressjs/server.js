const express = require("express");
require("express-async-errors");
const { query, validationResult } = require("express-validator");
const connectDb = require("./config/db");
const todoRoutes = require("./routes/todo.route");
const todoViewRoutes = require("./routes/todo.view.route");
const authRoutes = require("./routes/auth.route");
const adminRoutes = require("./routes/admin.route");
const NotFoundError = require("./errors/not-found.error");
const CustomError = require("./errors/custom.error");
const app = express();
const cors = require("cors");

const allowlist = ["http://localhost:5173"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// console.log({ __dirname }, process.env.test);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDb();

app.get("/test", query("search").notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).json(result.array());
    return;
  }
  const search = req.query.search;
  res.status(200).send({ search });
});

app.use("/api/todos", todoRoutes);
app.use("/view/todo", todoViewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.all("*", (req, res) => {
  throw new NotFoundError("Route not found.");
});

app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      errors: err.serializeErrors(),
    });
    return;
  }

  console.log(err);
  res.status(500).json({
    message: "Internal Server Error.",
  });
});

// app.all("*", async (req, res) => {
//   throw new NotFoundError("Not Found.");
//   res.status(404).json({
//     message: "Not found.",
//   });
// });

// app.use((err, req, res, next) => {
//   console.log(err instanceof CustomError);
//   if (err instanceof CustomError) {
//     res.status(err.statusCode).json({
//       message: err.serializeErrors(),
//     });
//     return;
//   }
//   if (err.message == "Invalid Credentials") {
//     res.status(401).json({
//       message: err.message,
//     });
//     return;
//   }
//   res.status(500).json({
//     message: "Internal server errror.",
//   });
// });

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
