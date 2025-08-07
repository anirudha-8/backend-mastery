# 📌 Promises in JavaScript

## 🔹 What is a Promise?

A **Promise** in JavaScript is an object that represents the eventual **completion (resolve)** or **failure (reject)** of an asynchronous operation.

It helps avoid **callback hell** and makes async code easier to read and maintain.

---

## 🔹 States of a Promise

1. **Pending** → Initial state, operation not completed.
2. **Fulfilled (Resolved)** → Operation completed successfully.
3. **Rejected** → Operation failed.

---

## 🔹 Syntax

```javascript
let promise = new Promise(function(resolve, reject) {
  // Do some async task
  if (/* success */) {
    resolve("Task completed successfully!");
  } else {
    reject("Something went wrong!");
  }
});
```

## 🔹 Consuming a Promise

We use .then(), .catch(), and .finally().

```js
promise
  .then((result) => {
    console.log("✅ Success:", result);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  })
  .finally(() => {
    console.log("🎉 Task finished (either success or failure).");
  });
```

---

## 🔹 Example 1: Basic Promise

```js
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data.");
    }
  }, 2000);
});

myPromise
  .then((message) => console.log(message)) // if resolved
  .catch((error) => console.error(error))  // if rejected
  .finally(() => console.log("Operation done!"));
```

---

## 🔹 Example 2: Promise Chaining

```js
new Promise((resolve, reject) => {
  resolve(10);
})
.then((num) => {
  console.log("First then:", num); 
  return num * 2;
})
.then((num) => {
  console.log("Second then:", num); 
  return num * 3;
})
.then((num) => {
  console.log("Third then:", num); 
});
```

---

## 🔹 Example 3: Promise with fetch()

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("Post:", data))
  .catch((error) => console.error("Error:", error));
```

---

## 🔹 Key Methods

- `Promise.all([p1, p2, ...])` → Resolves when all promises succeed, rejects if any fail.

- `Promise.race([p1, p2, ...])` → Returns the result of the first settled promise.

- `Promise.allSettled([p1, p2, ...])` → Waits for all promises, regardless of success or failure.

- `Promise.any([p1, p2, ...])` → Resolves with the first fulfilled promise (ignores rejections).
