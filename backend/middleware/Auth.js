const ErrorHandler = require("../util/error-handler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// creating a function to chek whether the user is logged in or not or bassically authenticated
exports.isUserAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = await req.cookies;
  if (!token) {
    return next(new ErrorHandler("please login to access the resources", 401));
  }

  // if we get the token
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

// creating a function to check for user or admin
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
