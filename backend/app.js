const express = require("express");

const usersRoute = require("./Router/usersRoute");
const errorHandler = require("./errorMiddleware");

const app = express();

// 1) MIDDLEWARES

app.use(express.json());

// 2) OUR ROUTS
app.use("/Api/JO_IN/users", usersRoute);

// Error Middleware
app.use(errorHandler);

module.exports = app;
