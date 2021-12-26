const express = require('express');
const router  = express.Router();
const authController = require("../../controllers/AuthController");

router.post('/registeruser', authController.registerUser);
router.post('/login', authController.login);
router.post('/registeradmin', authController.registerAdmin);
module.exports = router;