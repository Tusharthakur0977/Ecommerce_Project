const express = require("express");
const errormiddleware = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//config
require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser()); //using cookie parser
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");

app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);

//middleware for error
app.use(errormiddleware);

module.exports = app;
