# Callbacks and Callback Hell in JavaScript

## What is a Callback?

A **callback** is a function passed as an argument to another function, which is then executed inside that function to complete some action.

### Syntax

```javascript
function doSomething(callback) {
  // ...some code...
  callback();
}
```

### Example

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!
```

---

## What is Callback Hell?

**Callback hell** occurs when callbacks are nested within other callbacks several levels deep, making code hard to read and maintain.

### Example of Callback Hell

```javascript
getData(function(a) {
  parseData(a, function(b) {
    filterData(b, function(c) {
      processData(c, function(d) {
        saveData(d, function(e) {
          console.log("All done!");
        });
      });
    });
  });
});
```

This pyramid-like structure is difficult to follow and debug.

---

## How to Avoid Callback Hell

- Use **named functions** instead of anonymous functions.
- Use **Promises** or **async/await** for better readability.

### Example Using Promises

```javascript
getData()
  .then(parseData)
  .then(filterData)
  .then(processData)
  .then(saveData)
  .then(() => console.log("All done!"))
  .catch(err => console.error(err));
```
