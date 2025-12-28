const mongoose = require("mongoose");

const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log(`Successfully connected to MongoDB database!`);
	} catch (error) {
		console.error(`Error in connecting to MongoDB database: ${error}`);
		process.exit(1);
	}
};

module.exports = connectToDB;
