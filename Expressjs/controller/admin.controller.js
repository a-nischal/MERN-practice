const { NotBeforeError } = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const NotFoundError = require("../errors/not-found.error");

const getUsers = async (req, res) => {
  const { search, limit = 10, page = 1 } = req.query;
  const regex = new RegExp(search);
  const filter = {
    firstName: regex,
  };

  const users = await User.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const count = await User.countDocuments(filter);

  res.json({
    data: users,
    count,
    page,
    totalPage: Math.ceil(count / limit),
  });
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;

  const profileImage = req.file?.path;
  console.log(profileImage);
  const roles = ["Customer"];

  if (isAdmin) {
    roles.push("Admin");
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    roles,
    profileImage,
  });

  res.status(201).json({ message: "User created successfully" });
};

const updateUser = async (req, res) => {
  const { id } = req.params; // Get user ID from URL params

  const user = await User.findById(id); // Find the user by ID

  if (!user) {
    throw new NotFoundError("User not found.");
  }

  if (req.body.password) {
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
  }

  req.body.roles = ["Customer"];
  if (req.body.isAdmin) {
    req.body.roles.push("Admin");
  }
  // Update profileImage only if a new one is provided
  if (req.file?.path) {
    req.body.profileImage = req.file?.path;
  }

  await User.updateOne({ _id: id }, req.body); // Save the updated user

  res.status(200).json({ message: "User updated successfully" });
};

const deleteUser = async (req, res) => {
  const { id: _id } = req.params;
  await User.deleteOne({ _id });
  res.json({ message: "User deleted succesfully" });
};

// total no of user, totnal no of procuts { user: 10, product: 20}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
