const ErrorHandler = require("../util/error-handler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../util/JWTtoken");
const sendEmail = require("../util/sendEmail");
const crypto = require("crypto");

//📌 Register a User 📌
exports.registerUser = catchAsyncError(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "sample id",
      url: "sample url",
    },
  });

  // saving token in a variable and sending to responose with status code and user
  sendToken(user, 201, res);
});

//📌 Login USER 📌
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

//📌 LOgout User 📌
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User Logout Successfully",
  });
});

//📌 Forgot Password 📌

// this function will send a reset password mail to the user
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  // Get ResetPassword Token from getResetPasswordToken function in User model
  const resetToken = await user.getResetPasswordToken();

  // here we are (SAVING not adding) the resetPasswordToken and resetPasswordTokenExpire whicha inclues in userModel before sending mail
  await user.save({ validateBeforeSave: false });

  const ResetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;
  // console.log(resetToken);
  const message = `Your Reset Password URL is :- \n ${ResetPasswordUrl} \n If Not Done by you kindly ignore it`;
  try {
    await sendEmail({
      // options for sendEmail function
      email: user.email, //email of the reciever
      subject: "Ecommerce Password Recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully `,
    });
  } catch (err) {
    (user.resetPasswordToken = undefined),
      (user.resetPasswordTokenExpire = undefined);

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(err.message, 500));
  }
});

//📌 RESET PASSWORD 📌

// this function will use the reset mail URL to reset The password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  // creating token hash from token get by the email link

  const resetToken = req.params.token; // getting simple Reset Token from url of mail

  const resetHashedPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken) //
    .digest("hex");

  // finding user using the
  const user = await User.findOne({
    resetHashedPasswordToken,
    resetPasswordTokenExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHandler("Reset password is Invalid Or Expired", 404));
  }

  // if confirm password != password
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("password doesnt match Confirm password"));
  }

  // if we get the user then we updatting the password with the passwordd from body
  user.password = req.body.password;

  // and then setting resetPasswordToken && resetPasswordTokenExpire to undefined
  user.resetPasswordToken = undefined;
  user.resetPasswordTokenExpire = undefined;

  // and save the user with updated password
  await user.save();

  // and after that let the user Login
  sendToken(user, 200, res);
});

// 📌 Get user Details 📌 only for logged in User
exports.getUserDetails = catchAsyncError(async (req, res, nest) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// 📌 Update User's Own Password 📌 only for logged in User
exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid current Password", 401));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(
      new ErrorHandler("New password and confirm password doesn't Match", 401)
    );
  }

  user.password = req.body.newPassword;
  await user.save();

  sendToken(user, 200, res);
});

// 📌 Update User's Own Details 📌 only for logged in User
exports.updateProfile = catchAsyncError(async (req, res, next) => {
  // getting data from Body
  const UpdateduserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, UpdateduserData, {
    new: true,
    runValidators: true,
    userFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

//📌 Get all users(admin) 📌
exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

//📌 Get single user (ADMIN) 📌
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

//📌 update User DEtails including Role (ADMIn) 📌
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const updatedUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, updatedUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

//📌 Delete User (ADMIn)  📌
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
