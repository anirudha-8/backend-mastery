const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log("MongoDB is connected successfully!");
	} catch (error) {
		console.error("MongoDB connection failed!");
		process.exit(1);
	}
};

module.exports = connectDB;
