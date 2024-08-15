const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/constants");
const UnAuthorizedError = require("../errors/un-authorized");

const authenticate = (req, res, next) => {
  // use cookie parser
  const token = req.headers.cookie.replace("token=", "");

  try {
    const { id, email } = jwt.verify(token, secretKey);
    req.user = { id, email };
    next();
  } catch (err) {
    console.log(err);
    throw new UnAuthorizedError("Invalid Credentials");
  }
};

module.exports = authenticate;
