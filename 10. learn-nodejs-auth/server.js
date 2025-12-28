require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");

const PORT = process.env.PORT || 8080;

// connect to database
connectToDB();

const app = express();

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}`);
});
