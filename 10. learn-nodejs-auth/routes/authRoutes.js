const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

//all routes are related to authentication & authorization

// @desc - register user
router.post("/register", registerUser);

// @desc - login user
router.post("/login", loginUser);

module.exports = router;
