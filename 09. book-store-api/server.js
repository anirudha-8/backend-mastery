require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// HOME route
app.get("/", (req, res) => res.send("Home Route!"));

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}!`);
});
