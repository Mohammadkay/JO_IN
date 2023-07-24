const express = require("express");
const {
  createTour,
  getAllTours,
  updateTour,
  getOneTour,
  deleteTour,
} = require("../Controllers/tourController");
const router = express.Router();

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").patch(updateTour).get(getOneTour).delete(deleteTour);

module.exports = router;
