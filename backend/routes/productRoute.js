const express = require("express");
const router = express.Router();

// User Authentication Function or miidleware
const { isUserAuthenticated, authorizeRoles } = require("../middleware/Auth");

// Functions from Prodcut Controllers
const {
  getAllProducts,
  createProduct,
  updateproduct,
  deleteProduct,
  getProduct,
  prodctReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/productcontroller");

// Creating Routes and importing Controllers for Routes

//📌 Route to get all products (ADMIN & USER) 📌
router.get("/products", isUserAuthenticated, getAllProducts);

//📌 Route to Get A SIngle Product using ID  (ADMIN & USER) 📌
router.get("/product/:id", isUserAuthenticated, getProduct);

//📌 Route to Create a New Product (ADMin) 📌
router.post(
  "/admin/product/new",
  isUserAuthenticated,
  authorizeRoles("admin"),
  createProduct
);

//📌 Route to UPDATE a  Product (ADMin) 📌
router.put(
  "/admin/product/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  updateproduct
);

//📌 Route to DELETE a Product (ADMin) 📌
router.delete(
  "/admin/product/:id",
  isUserAuthenticated,
  authorizeRoles("admin"),
  deleteProduct
);

//📌 Route to Adding and Updating Reviews and Rating of a Product 📌
router.put("/review", isUserAuthenticated, prodctReview);

//📌 Route to Delete Reviews and Updating Rating of a Product 📌
router
  .get("/allreviews", getAllReviews)
  .delete("/deletereviews", isUserAuthenticated, deleteReview);

module.exports = router;
