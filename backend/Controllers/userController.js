const User = require("../Model/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  // Check for required fields
  if (!name || !email || !password || !phoneNumber) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  // Check password length
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters long");
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  try {
    // Encrypt password before saving to DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      isActive: false, // You might want to set this to a default value or use it based on some other condition
    });

    const { _id, isActive } = user;
    res.status(201).json({
      _id,
      name,
      email,
      phoneNumber,
      isActive,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};
