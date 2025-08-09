function delayFn(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
	await delayFn(2000);
	console.log(`Hello, ${name}!`);
}

delayedGreet("Anirudha");

async function divideFn(n1, n2) {
	try {
		if (n2 === 0) throw new Error("Can't divide by zero!");
		return n1 / n2;
	} catch (error) {
		console.error(`Error: ${error}`);
		return null;
	}
}

async function mainFn() {
	console.log(await divideFn(16, 2));
	console.log(await divideFn(16, 0));
}

mainFn();
