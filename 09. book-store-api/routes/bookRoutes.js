const express = require("express");
const {
	addNewBook,
	deleteBook,
	getAllBooks,
	getSingleBookById,
	updateBook,
} = require("../controllers/bookControllers");

const router = express.Router();

// @desc - get all books
router.get("/get", getAllBooks);

// @desc - get single book by ID
router.get("/get/:id", getSingleBookById);

// @desc - create new book
router.post("/add", addNewBook);

// @desc - delete a book
router.delete("/delete/:id", deleteBook);

// @desc - update a book
router.put("/update/:id", updateBook);

module.exports = router;
