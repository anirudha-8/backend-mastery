# ✅ What is the path Module?

The path module in Node.js provides utilities to work with file and directory paths. It ensures cross-platform compatibility, especially between Windows (\) and Unix (/) systems.

```js
const path = require('path');
```

---

## 🚀 Must-Know Methods (with Examples)

### 1. `path.join([...paths])`

- Joins all given path segments together using the platform-specific separator.

- Auto-fixes extra/missing slashes.

```js
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath);
// e.g., /Users/you/project/folder/file.txt
```

> Use it to build paths without worrying about slashes.

### 2. `path.resolve([...paths])`

- Resolves a sequence of paths or path segments into an absolute path.

- Starts from right to left, until an absolute path is found.

```js
const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath);
// e.g., /Users/you/currentWorkingDir/folder/file.txt
```

> Useful when you want a full path based on the current working directory.

### 3. `__dirname` and `__filename` (Node globals)

```js
console.log(__dirname);   // directory of current file
console.log(__filename);  // full path of current file
```

> Combine these with path.join() to build paths reliably.

### 4. `path.basename(p)`

- Returns the last portion of a path (like file.txt from /folder/file.txt)

```js
const fileName = path.basename('/folder/sub/file.txt');
console.log(fileName); // file.txt
```

### 5. `path.extname(p)`

- Returns the file extension (.txt, .js, etc.)

```js
const ext = path.extname('index.html');
console.log(ext); // .html
```

### 6. `path.dirname(p)`

- Returns the directory name of a path.

```js
const dir = path.dirname('/folder/file.txt');
console.log(dir); // /folder
```

---

## 🛠 Practical Use Cases

| Use Case                             | Methods to Use                     |
| ------------------------------------ | ---------------------------------- |
| Load a file relative to current file | `path.join(__dirname, 'file.txt')` |
| Get full path for logs/uploads/etc.  | `path.resolve('logs', 'app.log')`  |
| Extract file name                    | `path.basename()`                  |
| Extract extension                    | `path.extname()`                   |
| Get parent directory                 | `path.dirname()`                   |

---

## 🚫 Don't Bother With (for now)

*Avoid diving into:*

- path.parse() / path.format()

- path.normalize() unless you handle weird edge cases

- path.sep and path.delimiter unless building CLI tools for multiple platforms

---

## 💡 Summary

*Master these 6 core methods:*

```js
path.join()
path.resolve()
path.basename()
path.extname()
path.dirname()
(__dirname and __filename)
```

*These are enough for:*

- File path management

- Cross-platform development

- Real-world Node.js apps
