const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
	title: {},
	author: {},
	year: {},
	createdAt: {},
});

module.exports = mongoose.model("Book", BookSchema);
