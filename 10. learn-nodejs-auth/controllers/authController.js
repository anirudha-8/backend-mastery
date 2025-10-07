// @desc 	Register User
// @route 	POST /api/auth/register
// @access 	Public
const registerUser = async (req, res) => {
	try {
		// extract user information from request body
		const { username, email, password, role } = req.body;
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
	} catch (error) {
		console.error(`Error in login user: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal server error, please try again later!",
		});
	}
};

module.exports = { registerUser, loginUser };
