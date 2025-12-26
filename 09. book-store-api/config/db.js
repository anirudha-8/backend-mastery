const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const maskUri = (uri) => {
	if (!uri) return uri;
	try {
		// mask password in mongodb uri: mongodb+srv://username:password@...
		return uri.replace(/(\/\/[^:]+:)([^@]+)(@)/, "$1****$3");
	} catch (e) {
		return "***masked***";
	}
};

const connectDB = async () => {
	try {
		if (!MONGODB_URI) {
			console.error(
				"MongoDB URI is not set. Check your .env file (MONGODB_URI)."
			);
			process.exit(1);
		}

		console.log("Connecting to MongoDB with URI:", maskUri(MONGODB_URI));
		await mongoose.connect(MONGODB_URI);
		console.log("MongoDB is connected successfully!");
	} catch (error) {
		console.error("MongoDB connection failed!", error);
		process.exit(1);
	}
};

module.exports = connectDB;
