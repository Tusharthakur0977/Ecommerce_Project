const express = require("express");
const router = express.Router();

//functions for User uthentication
const { isUserAuthenticated, authorizeRoles } = require("../middleware/Auth");

// controller function for different Routes
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

// 📌 to create a new User 📌
router.post(
  "/register",
  isUserAuthenticated,
  authorizeRoles("admin"),
  registerUser
);

// 📌 for login 📌
router.post("/login", loginUser);

// 📌 for requesting reset password Link or MAil 📌
router.post("/password/forgot", forgotPassword);

// 📌 for resetting password using mail or Link 📌
router.put("/password/reset/:token", resetPassword);

// 📌 for logout the user 📌
router.get("/logout", logout);

// 📌 for getting logged in user's Own profile only  📌
router.get("/me", isUserAuthenticated, getUserDetails);

// 📌 for updating logged in user's Own password only  📌
router.put("/password/update", isUserAuthenticated, updatePassword);

// 📌 for Updating logged in user's Own profile only  📌
router.put("/me/update", isUserAuthenticated, updateProfile);

// 📌 for getting All users (ADMIN)  📌
router.get(
  "/admin/getAllUser",
  isUserAuthenticated,
  authorizeRoles("admin"),
  getAllUser
);

// 📌 for getting Single user (ADMIN)  📌
router.get(
  "/admin/getSingleUser/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  getSingleUser
);

// 📌 for Updating User Details (ADMIN)  📌
router.put(
  "/admin/updateUserRole/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

// 📌 for Deleting User (ADMIN)  📌
router.delete(
  "/admin/deleteUser/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = router;
