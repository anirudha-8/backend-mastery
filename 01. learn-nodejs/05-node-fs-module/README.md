# 📂 Node.js fs Module (Essential Guide)

The fs (File System) module allows us to create, read, update, and delete files.
Import it like this:

```js
const fs = require('fs');              // For sync & async
const fsPromises = require('fs').promises; // For modern promises/async-await
```

---

## 🔹 1. CREATE (Write a File)

✅ Sync

```js
fs.writeFileSync('test.txt', 'Hello World');
```

✅ Async (callback)

```js
fs.writeFile('test.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File created (async)');
});
```

```js
✅ Promise (modern)
await fsPromises.writeFile('test.txt', 'Hello World');
console.log('File created (promise)');
```

---

## 🔹 2. READ (Get File Content)

✅ Sync

```js
const data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);
```

✅ Async (callback)

```js
fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

✅ Promise (modern)

```js
const data = await fsPromises.readFile('test.txt', 'utf-8');
console.log(data);
```

---

## 🔹 3. UPDATE (Append Content)

✅ Sync

```js
fs.appendFileSync('test.txt', '\nAppended text');
```

✅ Async (callback)

```js
fs.appendFile('test.txt', '\nAppended text', (err) => {
  if (err) throw err;
  console.log('Content appended');
});
```

✅ Promise (modern)

```js
await fsPromises.appendFile('test.txt', '\nAppended text');
console.log('Content appended');
```

---

## 🔹 4. DELETE (Remove a File)

✅ Sync

```js
fs.unlinkSync('test.txt');
```

✅ Async (callback)

```js
fs.unlink('test.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
```

✅ Promise (modern)

```js
await fsPromises.unlink('test.txt');
console.log('File deleted');
```

---

## 🛠 Summary

| Operation  | Sync             | Async (Callback) | Promise (Modern)        |
| ---------- | ---------------- | ---------------- | ----------------------- |
| **Create** | `writeFileSync`  | `writeFile`      | `fsPromises.writeFile`  |
| **Read**   | `readFileSync`   | `readFile`       | `fsPromises.readFile`   |
| **Update** | `appendFileSync` | `appendFile`     | `fsPromises.appendFile` |
| **Delete** | `unlinkSync`     | `unlink`         | `fsPromises.unlink`     |

---

⚡ Pro tips:

- Use Sync only in quick scripts (blocks event loop).

- Use Async (callback) if maintaining older codebases.

- Prefer Promises (async/await) in modern apps → cleaner, easier to manage.
