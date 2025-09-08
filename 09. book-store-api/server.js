require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 8080;

// connect to databases
connectDB();

// middleware -> express.json()
app.use(express.json());

// HOME route
app.get("/", (req, res) => res.send("Home Route!"));

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}!`);
});
