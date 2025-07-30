const path = require("path");

// input file (for now hardcoded)
const inputFile = "sample.txt";

// 1. Absolute path
const absolutePath = path.resolve(inputFile);

// 2. Directory name
const dirName = path.dirname(inputFile);

// 3. File name
const fileName = path.basename(inputFile);

// 4. File extension
const fileExt = path.extname(inputFile);

/* ======================================================== */

console.log("📄 File Info:");

console.log("Absolute Path:", absolutePath);

console.log("File Name:", fileName);

console.log("Directory:", dirName);

console.log("Extension:", fileExt);
