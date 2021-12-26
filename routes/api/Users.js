const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const authenticate = require("../../middlewares/authenticate");

// get all users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ GetErrGetMessage: err });
    console.log(err);
  }
});
//get user by ID
router.get("/:userId", async (req, res) => {
  try {
    const users = await User.findOne({"Uid":req.params.userId});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ GetErrGetMessage: err });
    console.log(err);
  }
});
//delete user by ID  
router.delete("/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete( req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ DeleteErrGetMessage: err });
    console.log(err);
  }
});
// Update a user
router.patch("/:userId", async (req, res) => {
  try {
  // TO DO update user
  } catch (err) {
    res.status(500).json({ PatchErrMessage: err });
    console.log(err);
  }
});

// Add a user
router.post("/add", async (req, res) => {

  
  try {
   // TO DO add user
  } catch (err) {
    res.status(500).json({ PostErrMessage: err });
    console.log(err);
  }
});

module.exports = router;
