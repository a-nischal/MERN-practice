const { validationResult } = require("express-validator");
const validate = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).json({
      errors: result.array(),
    });
    return;
  }
  next();
};

module.exports = validate;
