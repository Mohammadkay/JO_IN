// const userTour = require('../Model/userTourModel')
const Tour = require ('../Model/tourModel')

exports.getUserTours = async (req, res) =>{
    try{
        const userTours = await Tour.find();
        res.status(201).json({
            status: "success",
            results: Tour.length,
            data: {
                userTours,
            }
        })
    } catch (err){
        res.status(400).json({
            status:"fail",
            message: err.message,
        })
    }

}


// const UserTour = require("../models/UserTour"); // Assuming the correct file path to the UserTour model

// const getUserToursByUserId = async (req, res) => {
//     const { userId } = req.params;
//     try {
//       const userTours = await UserTour.find({ userId }).populate("tourId");
//       if (userTours.length === 0) {
//         return res.status(404).json({ success: false, message: "No tours found for the user" });
//       }
//       res.status(200).json({ success: true, data: userTours });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   };