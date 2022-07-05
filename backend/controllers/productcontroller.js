const Product = require("../models/productModel");
// for Error handling
const ErrorHandler = require("../util/error-handler");
// we can use this inplace of Try Catch method
const catchAsyncError = require("../middleware/catchAsyncError");
const Apifeature = require("../util/api-features");

//📌 Create product and exporting  --> ADMIN 👇 📌
exports.createProduct = async (req, res, next) => {
  try {
    // through this code we are assigning id of Admin who created the prodct to the Admin field in product Model
    // so that we know which admin created that product
    req.body.user = req.user.id;

    const creatingproduct = await Product(req.body);
    if (!creatingproduct) {
      next(new ErrorHandler("Product not found", 404));
    }
    const product = await creatingproduct.save();
    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//📌 GET All Products 📌
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const prodCount = await Product.countDocuments();
  const resultPerPage = 7;

  // using search feature from api feature class to get products
  //             class object👇     query👇     querystr👇
  const apifeature = new Apifeature(Product.find(), req.query)
    .search() //👈 search fnctn
    .filter() //👈 filter fnctn
    .pagination(resultPerPage); //👈 pagination fnctn

  const products = await apifeature.query;
  if (!products) {
    next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({ success: true, prodCount, products });
});

//📌 GET Single Product using ID 👇 📌
exports.getProduct = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const product = await Product.findById({ _id });
    if (!product) {
      next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

//📌 UPDATE product  --> ADMIN 👇 📌
exports.updateproduct = catchAsyncError(async (req, res, next) => {
  // fetching id from params
  const _id = req.params.id;

  // finding product using id
  let product = await Product.findOne({ _id });

  // if product not found
  if (!product) {
    next(new ErrorHandler("Product not found", 404));
  }
  // updating product using req.body and id
  product = await Product.findByIdAndUpdate({ _id }, req.body);
  res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
    product,
  });
});

//📌 DELETE product USING ID --> ADMIN 👇 📌
exports.deleteProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    let product = await Product.findById({ _id });

    if (!product) {
      next(new ErrorHandler("Product not found", 404));
    }

    product = await Product.findByIdAndDelete({ _id });
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

//📌 DELETE All Products 👇 📌
exports.deleteAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    if (products.length <= 0) {
      next(new ErrorHandler("Product not found", 404));
    }
    products = await Product.deleteMany();
    res.status(200).json({
      success: true,
      message: "All Products Deleted Successfully",
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

//📌 Create new Review or update Review 📌
exports.prodctReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productid } = req.body;

  //object to store data of review
  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  // finding product using product ID we are getting from body
  const product = await Product.findById(productid);

  // checking or finding if user has already reviewed the product or not
  const isReviewed = product.reviews.find(
    // comparing user from reviews with logged IN user
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  // if user has already reviewed the product then we update the review
  if (isReviewed) {
    // iterating through all reviews
    product.reviews.forEach((rev) => {
      // checking for the users old review using id
      if (rev.user.toString() === req.user._id.toString()) {
        //updating rating and comment with new ones
        (rev.rating = rating), (rev.comment = comment);
      }
    });
  } else {
    // adding review array to reviews field in product model
    product.reviews.push(review);
    // setting number of reviews acc to reviews in product mode;
    product.numofReviews = product.reviews.length;
  }

  // giving overall rating of the product
  let avg = 0;

  //iterating through each review and adding its rating to average
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length; // dividing total average with total reviews
  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//📌To get all Review of a Product 📌
exports.getAllReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

//📌To Delete  Review of a Product 📌
exports.deleteReview = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.productid);
  const reviewid = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("Priduct not found", 404));
  }

  if (!reviewid) {
    return next(new ErrorHandler("Review not found", 404));
  }
  // 👇 in this varuible we are storing the reviews that we need
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id
  );

  // updating rating of the product
  let avg = 0;

  //iterating through each review and adding its rating to average
  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;
  reviews.length === 0 ? (ratings = 0) : (ratings = avg / reviews.length);
  const numofReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productid,
    { reviews, ratings, numofReviews },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
  });
});
