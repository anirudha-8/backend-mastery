const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const checkAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

router.get("/welcome", authMiddleware, checkAdmin, (req, res) => {
	res.json({ message: "Welcome to the admin home page!" });
});

module.exports = router;
