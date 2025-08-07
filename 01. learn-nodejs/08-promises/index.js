function delayFn(time) {
	return new Promise((resolve, reject) => setTimeout(resolve, time));
}

console.log(`Promise Execution Started...`);

delayFn(200).then(() => console.log(`After 2 secs, promise will be resolved!`));

console.log(`Promise Execution Ended...`);

function divideFn(n1, n2) {
	return new Promise((resolve, reject) => {
		if (n2 === 0) {
			reject("Can't be divided by zero!");
		} else {
			resolve(n1 / n2);
		}
	});
}

divideFn(16, 2)
	.then((res) => console.log(`Result: ${res}`))
	.catch((err) => console.error(`Error: ${err.message}`));

divideFn(16, 0)
	.then((res) => console.log(`Result: ${res}`))
	.catch((err) => console.error(`Error: ${err}`));
