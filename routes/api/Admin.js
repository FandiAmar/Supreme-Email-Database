const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");
const authenticate = require("../../middlewares/authenticate");

// get all Admins
router.get("/all", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ GetErrGetMessage: err });
    console.log(err);
  }
});
//get Admin by ID
router.get("/:adminId", async (req, res) => {
  try {
    const admin = await Admin.findOne({"Uid":req.params.adminId});
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ GetErrGetMessage: err });
    console.log(err);
  }
});
//delete Admin by ID  
router.delete("/:adminId", async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete( req.params.adminId);
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ DeleteErrGetMessage: err });
    console.log(err);
  }
});
// Update a Admin
router.patch("/:adminId", async (req, res) => {
  try {
  // TO DO update Admin
  } catch (err) {
    res.status(500).json({ PatchErrMessage: err });
    console.log(err);
  }
});

// Add a Admin
router.post("/add", async (req, res) => {

  
  try {
   // TO DO add Admin
  } catch (err) {
    res.status(500).json({ PostErrMessage: err });
    console.log(err);
  }
});

module.exports = router;
