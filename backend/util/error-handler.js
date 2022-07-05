// Creating a Errorhandler class with objects message and StatusCode
// which is inherited from node built in class "Error"

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); //super(messages) is a constructor of Error class
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
