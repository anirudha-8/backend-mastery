const mongoose = require("mongoose");

// connecting to db
mongoose
	.connect(
		"mongodb+srv://sangammukherjee2022:sangammukherjee2024@cluster0.7qjl1.mongodb.net/"
	)
	.then(() => console.log("database connected successfully"))
	.catch((e) => console.log(e));
