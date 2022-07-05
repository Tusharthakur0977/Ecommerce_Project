const express = require("express");
const {
  newOrder,
  getOrder,
  loggedinUserOrder,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");
const { isUserAuthenticated, authorizeRoles } = require("../middleware/Auth");
const router = express.Router();

// 📌 to create a new Order 📌
router.post("/order/new", isUserAuthenticated, newOrder);

// 📌 Get  Details of  Order using order ID 📌
router.get("/getorder/:id", isUserAuthenticated, getOrder);

// 📌 to Get LoggedIn User's orders (User) 📌
router.get("/getorders/me", isUserAuthenticated, loggedinUserOrder);

// 📌 to Get All Order Details (ADMIn) 📌
router.get(
  "/admin/getorders",
  isUserAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

// 📌 to update Order Details (ADMIn) 📌
router.put(
  "/admin/updateorder/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  updateOrderStatus
);

// 📌 to delete Order Details (ADMIn) 📌
router.delete(
  "/admin/deleteorder/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  deleteOrder
);

module.exports = router;
