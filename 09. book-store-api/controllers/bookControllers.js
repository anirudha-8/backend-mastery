const Book = require("../models/Book");

// @desc 	Get all books
// @route 	GET /api/books/get
// @access 	Public
const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find({});

		if (!books.length) {
			return res
				.status(404)
				.json({ success: false, message: "No books found!" });
		}

		res.status(200).json({
			success: true,
			message: "All books fetched successfully!",
			data: books,
		});
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
		const { id } = req.params;
		const book = await Book.findById(id);

		if (!book) {
			return res
				.status(404)
				.json({ success: false, message: "Book not found!" });
		}

		res.status(200).json({
			success: true,
			message: "Book fetched successfully!",
			data: book,
		});
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
		const { title, author, publishYear } = req.body;

		if (!title || !author) {
			return res.status(400).json({
				success: false,
				message: `"Title" and "Author" are required fields!`,
			});
		}

		const newBook = await Book.create({ title, author, publishYear });

		res.status(201).json({
			success: true,
			message: "Book created successfully!",
			data: newBook,
		});
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
		const { id } = req.params;

		const deletedBook = await Book.findByIdAndDelete(id);

		if (!deletedBook) {
			return res
				.status(404)
				.json({ success: false, message: "Book not found for deletion!" });
		}

		res.status(200).json({
			success: true,
			message: "Book deleted successfully!",
			data: deletedBook,
		});
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
