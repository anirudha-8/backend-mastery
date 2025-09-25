require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

// connect to MongoDB
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

// routes
app.get("/", (req, res) => res.send("Hello World!"));

// listening to the server
app.listen(PORT, () => {
	console.log(`Server is listening on - http://localhost:${PORT}`);
});
