require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

// connect to databases
connectDB();

// middleware -> express.json()
app.use(express.json());

// HOME route
app.get("/", (req, res) => res.send("Home Route!"));

// book api routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}!`);
});
