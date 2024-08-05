const CustomError = require("../errors/custom.error");
class ConflictError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = ConflictError;
