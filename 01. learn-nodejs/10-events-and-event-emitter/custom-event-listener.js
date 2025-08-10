const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
	constructor() {
		super();
		this.greeting = "Hello";
	}
	greet(name) {
		this.emit("greeting", `${this.greeting}, ${name}`);
	}
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (input) => {
	console.log(`From "greeting" event: ${input}`);
});

myCustomEmitter.greet("Anirudha");
