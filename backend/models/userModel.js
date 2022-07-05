const mongoose = require("mongoose");
const validator = require("validator");
// JWT token
const jwt = require("jsonwebtoken");
// for decrypting password
const bcrypt = require("bcryptjs");
// for generating resetting Password token
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter User name"],
    maxLength: [30, "name cannot exceed 30 characters"],
    minLength: [3, "name should minimum have 3 characters"],
  },
  email: {
    type: String,
    required: [true, "please enter a email"],
    unique: true,
    validate: [validator.isEmail, "Enter a valid Email address"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minLength: [5, "password should be minimum 5 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },

  resetPasswordToken: {
    type: String,
  },
  resetPasswordTokenExpire: {
    type: Date,
  },
});

//🎈 hashing password
userSchema.pre("save", async function (next) {
  // if password is not modified then skip the hashing step
  // case of profile update
  if (!this.isModified("password")) {
    next();
  }

  // otherwise hash the modified password
  this.password = await bcrypt.hash(this.password, 10); // case of change password
});

//🎈 creating a method "getJWTToken" to generate JWT token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE, // specifing expire time for jwt tken
  });
};

//🎈 compare password for login
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//🎈 generating token for Reset Password
userSchema.methods.getResetPasswordToken = async function () {
  // generating token by a random 20 bytes string
  const resetToken = crypto.randomBytes(20).toString("hex"); // creating random 20bytes string
  //hashing and (ADDING not saving) resetPasswordToken to resetPasswordToken field in  userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256") // an algorithem for hashing
    .update(resetToken) // updating resetToken from 20bytes to hashed code
    .digest("hex");
  // setting Expiry time for reset Token and (ADDING not saving) to resetPasswordTokenExpire field in userSchema
  this.resetPasswordTokenExpire = Date.now() + 5 * 60 * 1000;

  // returning "only Reset Token not hashed Rest Token" which can be accesseed in forgotPassword function in User Controllr
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
