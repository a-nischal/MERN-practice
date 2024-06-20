const jwt = require("jsonwebtoken");
const User = require("../model/User");
const bcrypt = require("bcryptjs")
const { signUpService } = require("../services/auth.services.js")
const UnauthorizedError = require ("../errors/Un-authorized.error.js")

// Secret key for signing the token
const secretKey = "WIolrgLYgeOX8YfrFENHVEd3jWbasMAC";


const signUp = async (req, res) => {
  await signUpService(req.body);
  res.json({
    message: "User successfully signed up.",
  });
};




const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthorizedError("Email or password invalid.")
    };
    
  
  const validpassword = bcrypt.compareSync(password,user.password);
  console.log(validpassword);

  if(!validpassword){
    throw new UnauthorizedError("Invalid Password.")
    };
  

  const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
    expiresIn: "1d",
  });

  res.json({
    message: "User successfully signed in.",
    token,
  });
};

module.exports = {
  signIn,
  signUp,
  secretKey
};