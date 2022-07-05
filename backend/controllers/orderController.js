const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../util/error-handler");
const catchAsyncError = require("../middleware/catchAsyncError");

// 📌 Creating a Order 📌
exports.newOrder = catchAsyncError(async (req, res, next) => {
  // gettnig Details from FrontEnd
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id,
    paidAt: Date.now(),
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// 📌 Get Single Order using Id 📌

exports.getOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    //using populate we can access users name And email in order Model
    "user",
    "name email"
  );
  console.log(order.user._id);
  if (!order) {
    return next(new ErrorHandler("there are no orders for this ID", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// 📌 Getting Orders of LoggedIn User 📌

exports.loggedinUserOrder = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// 📌 Get All Orders (ADMIn) 📌
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const allOrders = await Order.find();

  // for admin to get total amount of all orders placed by all userss
  let totalAmount = 0;

  allOrders.forEach((order) => {
    totalAmount += order.totalPrice;
  });
  console.log(allOrders);
  res.status(200).json({
    success: true,
    totalAmount,
    allOrders,
  });
});

// 📌 Update Order Status (ADMIn) 📌
exports.updateOrderStatus = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not Found", 404));
  }
  // if order already delivered
  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("Product already delivered", 404));
  }

  // if order is Shipped we need to update the order Status && orderQuantity after order is delivered

  order.orderItems.forEach(async (o) => {
    // iterating through orderItem for every order and updating Stock value in product Model
    await updateStock(o.product, o.quantity); // creating a update function
  });

  // now we update order Status from body
  order.orderStatus = req.body.status;

  // updating DeliveredAt field in order Model
  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  // saving order details with updated Order Status
  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });

  //Update Stock Function
  async function updateStock(productId, quantity) {
    const product = await Product.findById(productId);
    console.log(product);
    // updating Stock value in Product Model by minus the quantity of the delivered order
    product.stock -= quantity;
    await product.save({ validateBeforeSave: false });
  }
});

// 📌 to Delete order (ADMIn) 📌
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order not Found", 404));
  }
  //Removing the order That we find
  await order.deleteOne();

  res.status(200).json({
    success: true,
  });
});
