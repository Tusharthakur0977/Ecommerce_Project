// importing express app
const app = require("./app");
const connectDatabase = require("./config/db");

// handling Uncaugth Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shutting down the server due to UnCaugth Exception");
  process.exit(1);
});

// ENV port
require("dotenv").config({ path: "backend/config/config.env" });
const port = process.env.PORT;

// importing database
// Connecting to database
connectDatabase();

const server = app.listen(port, () => {
  console.log(`server running at "http://localhost/${port}" `);
});

//unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shutting down the server due to unhandled Rejection");

  server.close(() => {
    process.exit(1);
  });
});
