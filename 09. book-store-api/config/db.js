const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect();
		console.log("MongoDB is connected successfully!");
	} catch (error) {
		console.error("MongoDB connection failed!");
		process.exit(1);
	}
};

module.exports = connectDB;
