const mongoose = require("mongoose");

// connecting to db
mongoose
	.connect(
		"mongodb+srv://sangammukherjee2022:sangammukherjee2024@cluster0.7qjl1.mongodb.net/"
	)
	.then(() => console.log("database connected successfully"))
	.catch((e) => console.log(e));

// create UserSchema
const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	isActive: Boolean,
	tags: [String],
	createdAt: { type: Date, default: Date.now },
});

//create User model
const User = mongoose.model("User", UserSchema);
