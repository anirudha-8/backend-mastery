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

const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
