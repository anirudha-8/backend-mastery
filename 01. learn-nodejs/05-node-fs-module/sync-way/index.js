const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
const filePath = path.join(dataFolder, "example.txt");

// Utility function for safe file operations
function safeExecute(action, callback) {
	try {
		callback();
	} catch (err) {
		console.error(`❌ Error during ${action}:`, err.message);
	}
}

// Ensure "data" folder exists
safeExecute("folder check", () => {
	if (!fs.existsSync(dataFolder)) {
		fs.mkdirSync(dataFolder);
		console.log(`📁 "data" folder created!`);
	} else {
		console.log(`📁 "data" folder already exists.`);
	}
});

// ========== FILE OPERATIONS (SYNC WAY) ========== //

// CREATE / WRITE
safeExecute("file write", () => {
	fs.writeFileSync(
		filePath,
		"Hello, from sync way of handling files using `fs` module"
	);
	console.log(`✅ File written at: ${filePath}`);
});

// READ
safeExecute("file read", () => {
	const content = fs.readFileSync(filePath, "utf-8");
	console.log(`📖 File content: ${content}`);
});

// UPDATE / APPEND
safeExecute("file append", () => {
	fs.appendFileSync(filePath, "\nGood Bye :)");
	const updatedContent = fs.readFileSync(filePath, "utf-8");
	console.log(`✏️ Updated File content:\n${updatedContent}`);
});

// DELETE
safeExecute("file delete", () => {
	// Optional safeguard: delete only if exists
	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
		console.log(`🗑️ File deleted successfully!`);
	} else {
		console.log(`⚠️ File does not exist, nothing to delete.`);
	}
});
