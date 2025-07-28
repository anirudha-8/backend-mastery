console.log(`__filename in wrapper module: ${__filename}`);

console.log(`__dirname in wrapper module: ${__dirname}`);

module.exports.greet = (name) => {
	return `Hello, ${name}!`;
};
