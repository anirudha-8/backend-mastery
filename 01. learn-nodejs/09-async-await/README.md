# Async/Await in JavaScript

Async/Await is a modern syntax for handling asynchronous operations in JavaScript, built on top of Promises. It makes asynchronous code look and behave more like synchronous code, improving readability and maintainability.

## Syntax

- `async` keyword: Declares a function as asynchronous. It always returns a Promise.
- `await` keyword: Pauses the execution of an async function until the Promise is resolved or rejected.

```js
// Declaring an async function
async function fetchData() {
  // Awaiting a Promise
  const result = await someAsyncOperation();
  return result;
}
```

## Example: Basic Usage

```js
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved!');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling...');
  const result = await resolveAfter2Seconds();
  console.log(result); // 'Resolved!'
}

asyncCall();
```

## Error Handling

Use `try...catch` blocks to handle errors in async functions.

```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Notes

- `await` can only be used inside `async` functions.
- Async functions always return a Promise.
- Makes asynchronous code easier to read and write compared to chaining `.then()` and `.catch()`.
