const express = require("express");

const app = express();

//Middleware
app.use(express.json());

let books = [
	{
		id: "1",
		title: "Book 1",
	},
	{
		id: "2",
		title: "Book 2",
	},
];

//intro route
app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our bookstore api",
	});
});

//get all books
app.get("/get", (req, res) => {
	res.json(books);
});

//get a single book
app.get("/get/:id", (req, res) => {
	const book = books.find((item) => item.id === req.params.id);
	if (book) {
		res.status(200).json(book);
	} else {
		res.status(404).json({
			message: "Book not found! Please try with a different Book ID",
		});
	}
});

const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
