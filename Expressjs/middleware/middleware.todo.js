const jwt = require("jsonwebtoken");
const { secretKey } = require("../express-todo/config/constants");
const UnAuthorizedError = require("../errors/Un-authorized.error");

const authenticate = (req, res, next) => {
  const { token } = req.headers;

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
