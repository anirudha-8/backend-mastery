const fs = require("fs").promises;
const path = require("path");

const dataFolder = path.join(__dirname, "data");
const filePath = path.join(dataFolder, "example.txt");

async function fileOperations() {
	try {
		// Create 'data' folder if doesn't exist
		await fs.mkdir(dataFolder, { recursive: true });
		console.log("'Data' folder created successfully!");

		// ========== FILE OPERATIONS (PROMISES WAY) ========== //

		// 1. CREATE / WRITE
		await fs.writeFile(filePath, "Hello, this is created with Promises!");
		console.log("✅ File created and data written");

		// 2. READ
		const data = await fs.readFile(filePath, "utf-8");
		console.log("📖 File content:", data);

		// 3. APPEND
		await fs.appendFile(filePath, "\nGood Bye :)");
		console.log("✅ Data appended");
		const updatedData = await fs.readFile(filePath, "utf-8");
		console.log("📖 File content:", updatedData);

		// 4. DELETE
		await fs.unlink(filePath);
		console.log("🗑️ File deleted");
	} catch (err) {
		console.error("❌ Error:", err.message);
	}
}

fileOperations();
