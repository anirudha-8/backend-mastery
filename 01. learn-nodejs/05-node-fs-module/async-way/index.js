const { error } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
const filePath = path.join(dataFolder, "example.txt");

// ensure "data" folder exists
try {
	if (!fs.existsSync(dataFolder)) {
		fs.mkdirSync(dataFolder);
		console.log(`📁 "data" folder created!`);
	} else {
		console.log(`📁 "data" folder already exists.`);
	}
} catch (error) {
	console.error("Error in folder creation: ", error.message);
}

// ========== FILE OPERATIONS (ASYNC WAY) ========== //

// CREATE / WRITE
fs.writeFile(
	filePath,
	"Hello, from async way of handling files using `fs` module.",
	(err) => {
		if (err) return console.error(`❌ Error writing file: ${err.message}`);
		console.log("✅ File created!");

		// READ
		fs.readFile(filePath, "utf-8", (err, data) => {
			if (err) return console.error(`❌ Error reading file: ${err.message}`);
			console.log(`📖 File content: ${data}`);

			// APPEND
			fs.appendFile(filePath, "\nGood Bye :)", (err) => {
				if (err)
					return console.error(`❌ Error appending file: ${err.message}`);
				console.log("✏️ File updated with new content!");
				// reading updated file
				fs.readFile(filePath, "utf-8", (err, updatedData) => {
					if (err)
						return console.error(`❌ Error reading file: ${err.message}`);
					console.log(`📖 Updated file content: ${updatedData}`);

					// DELETE (optional)
					fs.unlink(filePath, (err) => {
						if (err)
							return console.error(`❌ Error deleting file: ${err.message}`);
						console.log(`📖 File deleted successfully!`);
					});
				});
			});
		});
	}
);
