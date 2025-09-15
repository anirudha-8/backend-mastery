const Book = require("../models/Book");

// @desc 	Get all books
// @route 	GET /api/books/get
// @access 	Public
const getAllBooks = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// @desc 	Get single book by ID
// @route 	GET /api/books/get/:id
// @access 	Public
const getSingleBookById = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// @desc 	Create a new book
// @route 	POST /api/books/add
// @access 	Public
const addNewBook = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// @desc 	Delete a book
// @route 	DELETE /api/books/delete/:id
// @access 	Public
const deleteBook = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// @desc 	Update a book
// @route 	PUT /api/books/update/:id
// @access 	Public
const updateBook = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// exporting all controllers
module.exports = {
	getAllBooks,
	getSingleBookById,
	addNewBook,
	deleteBook,
	updateBook,
};
