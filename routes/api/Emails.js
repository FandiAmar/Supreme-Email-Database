const express = require("express");
const router = express.Router();
const Email = require("../../models/Email");

// get all Email
router.get("/all", async (req, res) => {
  try {
    const email = await Email.find();
    res.json(email);
  } catch (err) {
    res.status(500).json({ GetErrGetMessage: err });
    console.log(err);
  }
});
//delete Email by ID
router.delete("/delete/:emailId", async (req, res) => {
  try {
    const email = await Email.findOneAndDelete(  {"Uid":req.params.emailId});
    res.status(200).json(email);
  } catch (err) {
    res.status(500).json({ DeleteErrGetMessage: err });
    console.log(err);
  }
});
//update Email by ID
router.patch("/update/:emailId", async (req, res) => {
  try {
  
      // TO DO update Email

    res.status(200);
  } catch (err) {
    res.status(500).json({ PatchErrMessage: err });
    console.log(err);
  }
});

// Add a email
router.post("/add/single", async (req, res) => {
  

  try {
   // TO DO add single Email
    
  } catch (err) {
    res.status(500).json({ PostErrMessage: err });
    console.log(err);
  }
});
router.post("/add/multiple", async (req, res) => {
  
  try {

   // TO DO add multiple Emails

  } catch (err) {
    res.status(500).json({ PostErrMessage: err });
    console.log(err);
  }
});

module.exports = router;
