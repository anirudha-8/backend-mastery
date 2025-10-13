const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc 	Register User
// @route 	POST /api/auth/register
// @access 	Public
const registerUser = async (req, res) => {
	try {
		// extract user information from request body
		const { username, email, password, role } = req.body;

		// check if the user is already exists in our database
		const checkExistingUser = await User.findOne({
			$or: [{ username }, { email }],
		});
		if (checkExistingUser) {
			return res.status(400).json({
				success: false,
				message:
					"User is already exists either with same username or same email. Please try with a different username or email!",
			});
		}

		// hash user password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// create new user and save in database
		const newlyCreatedUser = new User({
			username,
			email,
			password: hashedPassword,
			role: role || "user",
		});

		await newlyCreatedUser.save();

		if (newlyCreatedUser) {
			res.status(201).json({
				success: true,
				message: "User registered successfully!",
			});
		} else {
			res.status(400).json({
				success: false,
				message: "Unable to register user, please try again later!",
			});
		}
	} catch (error) {
		console.error(`Error in register user: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal server error, please try again later!",
		});
	}
};

// @desc 	Login User
// @route 	POST /api/auth/login
// @access 	Public
const loginUser = async (req, res) => {
	try {
		// extract user information from body
		const { username, password } = req.body;

		//find if the current user is exists in database or not
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(400).json({
				success: false,
				message: `User doesn't exists`,
			});
		}
	} catch (error) {
		console.error(`Error in login user: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal server error, please try again later!",
		});
	}
};

module.exports = { registerUser, loginUser };
