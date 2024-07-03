const jwt = require("jsonwebtoken");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const authService = require("../services/auth.services.js");
const UnAuthorizedError = require("../errors/Un-authorized.error.js");
const { secretKey } = require("../config/constants.js");

// Secret key for signing the token
const signUp = async (req, res) => {
  await authService.signUp(req.body);
  res.json({
    message: "User successfully signed up.",
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthorizedError("Email or password is incorrect.");
  }

  // plain password, hashed password
  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    throw new UnAuthorizedError("Invalid Credentials.");
  }

  const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
    expiresIn: "10d",
  });

  token.value;
  res.json({
    message: "User successfully signed in.",
    token,
  });
};

module.exports = {
  signIn,
  signUp,
};