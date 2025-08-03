const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });

	if (req.url === "/") {
		res.end("<h1>Welcome to Home Page 🏠</h1><p>This is the main page.</p>");
	} else if (req.url === "/about") {
		res.end("<h1>About Us 📖</h1><p>This is the About page.</p>");
	} else if (req.url === "/contact") {
		res.end("<h1>Contact Us 📞</h1><p>Email us at: support@example.com</p>");
	} else {
		res.end(
			"<h1>404 Not Found ❌</h1><p>The page you are looking for does not exist.</p>"
		);
	}
});

const PORT = 8080;

server.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}`);
});
