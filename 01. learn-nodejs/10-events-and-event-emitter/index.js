var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("my_event", () => {
	console.log("Hello, from events in Node.js");
});

eventEmitter.emit("my_event");
