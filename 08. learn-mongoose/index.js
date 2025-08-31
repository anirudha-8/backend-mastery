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

// create User model
const User = mongoose.model("User", UserSchema);

// create base function to run all mongoose operations
async function runQueryExamples() {
	try {
		/*
         === Here, in try block we've performed mongoose operations.
         === For each the function will run and will create the same entry each time.
         === So, you make sure to change the document each time.
         === Also, perform one operation at one time and do comment for all rest of the operations
         */

		// -------- create a new document -------- //
		// -> first way
		const newUser1 = await User.create({
			name: "Updated User",
			email: "updated@gmail.com",
			age: "75",
			isActive: true,
			tags: ["developer"],
		});
		// -> second way
		const newUser2 = new User({
			name: "Raj Mukherjee",
			email: "raj@gmail.com",
			age: "40",
			isActive: true,
			tags: ["developer", "designer", "manager"],
		});
		await newUser2.save();
		console.log("Created new user", newUser);

		// -------- get all users -------- //
		const allUsers = await User.find({});
		console.log(allUsers);

		// -------- get all users whose status is false -------- //
		const getUserOfActiveFalse = await User.find({ isActive: true });
		console.log(getUserOfActiveFalse);
	} catch (e) {
		console.log("Error ->", e);
	} finally {
		await mongoose.connection.close();
	}
}

runQueryExamples();
