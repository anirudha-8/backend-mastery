const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

// check if "data" folder exist, if not create one
if (!fs.existsSync(dataFolder)) {
	fs.mkdirSync(dataFolder);
	console.log(`"data" folder created!`);
}

// ================ file operations in sync way ================ //

const filePath = path.join(dataFolder, "example.txt");

// writing to file if exist, else create one and override it
fs.writeFileSync(
	filePath,
	"Hello, from sync way of handling files using `fs` module"
);

// read file content
const readFileContent = fs.readFileSync(filePath, "utf-8");
console.log(`File content: ${readFileContent}`);

// append new content to file
fs.appendFileSync(filePath, "\nGood Bye :)");
console.log(`Updated File content: ${fs.readFileSync(filePath, "utf-8")}`);

// delete file
fs.unlinkSync(filePath);
console.log(`File deleted successfully!`);
