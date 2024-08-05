const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/constants");
const UnAuthorizedError = require("../errors/un-authorized");

const adminAuth = (req, res, next) => {
  const token = req.headers.cookie.replace("token=", ""); // req.cookies.token

  try {
    const { id, email, roles } = jwt.verify(token, secretKey);
    if (!roles.includes("Admin")) {
      throw new UnAuthorizedError("Unauthorized Action.");
    }
    req.user = { id, email, roles };
    next();
  } catch (err) {
    console.log(err);
    throw new UnAuthorizedError("Invalid Credentials");
  }
};

module.exports = adminAuth;
