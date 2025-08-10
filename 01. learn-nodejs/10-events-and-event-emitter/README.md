# Node.js Events & EventEmitter

## What are Events in Node.js?

- Node.js is built on an **event-driven architecture**.
- Events are actions or occurrences that happen in the system (like a file being opened, a server receiving a request, etc.).
- Example: When a server receives an HTTP request, it triggers an event.

## EventEmitter Class

- The `events` module in Node.js provides the **EventEmitter class**.
- Most Node.js core modules (like `http`, `fs`, etc.) are built around the EventEmitter.

---

### ✡️ Importing EventEmitter

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
```

### ✡️ Registering (listening to) Events

Use `.on()` method to register an event listener.

```js
emitter.on("greet", () => {
    console.log("Hello World!");
});
```

### ✡️ Emitting Events

Use `.emit()` method to trigger an event.

```js
emitter.emit("greet");
```

### ✡️ Passing Arguments to Listeners

```js
emitter.on("greetUser", (name) => {
    console.log(`Hello, ${name}`);
});
emitter.emit("greetUser", "Anirudha");
```

### ✡️ Multiple Listeners for Same Event

```js
emitter.on("start", () => console.log("First listener"));
emitter.on("start", () => console.log("Second listener"));
emitter.emit("start");
```

### ✡️ Removing Listeners

Use `.off()` (or `.removeListener()`) to remove event listeners.

```js
const callback = () => console.log("This will be removed");
emitter.on("event", callback);
emitter.off("event", callback);
```

### ✡️ Special Methods

`.once()` → Listens for an event only once.

```js
emitter.once("login", () => console.log("User logged in"));
emitter.emit("login");  // Runs
emitter.emit("login");  // Won't run again
```

---

## Useful EventEmitter Methods

- `.on(eventName, listener)` → Registers listener.

- `.emit(eventName, ...args)` → Emits event.

- `.once(eventName, listener)` → Registers listener for one-time execution.

- `.off(eventName, listener)` → Removes a specific listener.

- `.removeAllListeners(eventName)` → Removes all listeners for an event.

---

## Real-World Example

### HTTP server events

```js
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Events in Node.js!");
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
```

---

## Summary

- Node.js is event-driven.

- EventEmitter is at the core of many Node.js modules.

- Events allow asynchronous, non-blocking behavior.
