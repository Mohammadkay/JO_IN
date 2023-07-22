const dotenv = require("dotenv").config();
const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./Router/usersRoute");
const errorHandler = require("./errorMiddleware");
//middleware
app.use(express.json());
// Routes Middleware
app.use("/Api/JO_IN/users", usersRoute);
//
//routes

//
app.use(errorHandler);
//
const port = process.env.PORT;
//
//
mongoose
  .connect(process.env.MONGO_URI)
  //if  connect successfully
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  //if there a problem in connect
  .catch((error) => {
    console.log(error);
  }, error);
