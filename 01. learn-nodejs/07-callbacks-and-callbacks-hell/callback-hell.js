const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) return console.error(`Error reading file: ${err.message}`);
	console.log(`File content: \n${data}`);

	const modifiedData = data.toUpperCase();

	// write modified data to new file
	fs.writeFile("output.txt", modifiedData, (err) => {
		if (err) return console.error(`Error writing file: ${err.message}`);
		console.log(`\n==========================================\n`);

		console.log(`\nModified content written to new file!!!`);

		console.log(`\n==========================================\n`);

		// reading modified content, from new file
		// reading modified data, from new file
		fs.readFile("output.txt", "utf8", (err, data) => {
			if (err) return console.error(`Error reading file: ${err.message}`);
			console.log(`Modified content, from new file: \n${data}`);
		});
	});
});
