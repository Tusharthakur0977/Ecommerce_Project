// function for 👇 this code
//  const token = user.getJWTToken();
//   res.status(200).json({
//     success: true,
//     token,
//   });

const sendToken = (user, statuscode, res) => {
  //generating token
  const token = user.getJWTToken();

  // options for cookies
  const Cookieoption = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 //logic for cookie expirinig date
    ),
    httpOnly: true,
  };
  // sending status, cookie, success, user and token in response
  res.status(statuscode).cookie("token", token, Cookieoption).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
