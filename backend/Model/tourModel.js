const mongoose = require("mongoose");
const User =require("./userModel")
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This tour must have a name"],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "This tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "This tour must have a Size"],
  },
  difficulty: {
    type: String,
    required: [true, "This tour must have a difficulty"],
  },

  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "This tour must have a price"],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "This tour must have a summary"],
  },
  description: {
    type: String,
    trim: true,
  },

  images: [String],
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDate: [Date],
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
