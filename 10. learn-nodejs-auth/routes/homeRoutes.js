const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
	const { id, username, email, role } = req.userInfo;
	res.json({
		message: "Welcome to the home page!",
		user: {
			id,
			username,
			email,
			role,
		},
	});
});

module.exports = router;
