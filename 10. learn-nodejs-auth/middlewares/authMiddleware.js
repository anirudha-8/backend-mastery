const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
	// get auth header
	const authHeader = req.headers["authorization"];
	console.log(authHeader);

	// extract bearer token
	const token = authHeader && authHeader.split(" ")[1];
	console.log(`Bearer Token is: ${token}`);

	// what if token is not present
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Access denied, no token available! Please, login to continue!",
		});
	}

	// decode and verify the token information
	try {
		const verifyTokenInfo = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
		console.log(verifyTokenInfo);
		req.userInfo = verifyTokenInfo; // Attach token info to request
		next(); // Continue to next middleware/route
	} catch (error) {
		console.error("Token verification failed:", error.message);
		return res.status(403).json({
			success: false,
			message: "Invalid or expired token!",
		});
	}
};

module.exports = authMiddleware;
