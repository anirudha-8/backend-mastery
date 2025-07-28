const add = (n1, n2) => n1 + n2;

const sub = (n1, n2) => n1 - n2;

const mul = (n1, n2) => n1 * n2;

const div = (n1, n2) => {
	if (n2 === 0) throw Error("Cannot divide by zero.");
	return n1 / n2;
};

module.exports = { add, sub, mul, div };
