const CustomError = require("../errors/custom.error");
class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotFoundError;