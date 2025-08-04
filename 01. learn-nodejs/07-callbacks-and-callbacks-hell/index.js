const fs = require("fs");

function person(name, cb) {
	console.log(`Hello, ${name}!`);
	cb();
}

function address() {
	console.log("Bengaluru, India.");
}

person("Anirudha", address);

console.log(`\n==========================================\n`);

// reading file
fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) return console.error(`Error reading file: ${err.message}`);
	console.log(`File content: \n${data}`);
});
