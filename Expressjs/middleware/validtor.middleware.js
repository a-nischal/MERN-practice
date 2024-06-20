const { validationResult } = require("express-validator");
const validator = (req, res, next) => {
  const reqWithErrors = validationResult(req);
  if (reqWithErrors.array().length === 0) {
    next();
    return;
  }

  res.status(400).send({ errors: reqWithErrors.array() });
};

module.exports = {
  validator,
};
