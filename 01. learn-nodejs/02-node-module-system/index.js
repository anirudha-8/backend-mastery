const { add, sub, div, mul } = require("./calculator-module");

console.log(`Addition: ${add(5, 3)}`);

console.log(`Subtraction: ${sub(11, 3)}`);

console.log(`Multiplication: ${mul(4, 2)}`);

console.log(`Division: ${div(64, 8)}`);

try {
	console.log("Trying to divide a number by zero");

	console.log(`Division: ${div(64, 0)}`);
} catch (error) {
	console.error(`Error message: ${error.message}`);
}
