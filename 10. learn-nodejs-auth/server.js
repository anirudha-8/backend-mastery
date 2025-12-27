require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}`);
});
