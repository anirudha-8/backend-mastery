require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// connect to MongoDB
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

// middleware to parse JSON request bodies
app.use(express.json());

// home route
app.get("/", (req, res) => res.send("Hello World!"));

// API route status check
app.get("/api", (req, res) => res.send("API status check - healthy!"));

// API related routes
app.use("/api/auth", authRoutes);

// listening to the server
app.listen(PORT, () => {
	console.log(`Server is listening on - http://localhost:${PORT}`);
});
