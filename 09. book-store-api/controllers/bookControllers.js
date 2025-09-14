const Book = require("../models/Book");

// @desc 	Get all books
// @route 	GET /api/books/get
// @access 	Public
const getAllBooks = async (req, res) => {};

// @desc 	Get single book by ID
// @route 	GET /api/books/get/:id
// @access 	Public
const getSingleBookById = async (req, res) => {};

// @desc 	Create a new book
// @route 	POST /api/books/add
// @access 	Public
const addNewBook = async (req, res) => {};

// @desc 	Delete a book
// @route 	DELETE /api/books/delete/:id
// @access 	Public
const deleteBook = async (req, res) => {};

// @desc 	Update a book
// @route 	PUT /api/books/update/:id
// @access 	Public
const updateBook = async (req, res) => {};

// exporting all controllers
module.exports = {
	getAllBooks,
	getSingleBookById,
	addNewBook,
	deleteBook,
	updateBook,
};
