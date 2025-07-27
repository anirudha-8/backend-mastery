console.log("Hello Node.js!");

const arr = [1, 2, 3, 4];

console.log("Array is: ", arr);

setTimeout(() => {
	console.log("This line will be run after 2 seconds.");
}, 2000);

console.log("This is the last line of the sync code.");
