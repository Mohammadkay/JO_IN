const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./Router/usersRoute");
const roleRoute = require("./Router/roleRoute");
const errorHandler = require("./errorMiddleware");

const app = express();

// 1) MIDDLEWARES
app.use(morgan("dev"));

app.use(express.json());
// 2) OUR ROUTS
app.use("/Api/JO_IN/users", usersRoute);
app.use("/Api/JO_IN/role", roleRoute);

// Error Middleware
app.use(errorHandler);

module.exports = app;
