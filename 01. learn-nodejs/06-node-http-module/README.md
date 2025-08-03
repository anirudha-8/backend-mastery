# 🌐 Node.js `http` Module  

The `http` module in Node.js is one of the **core modules** that allows us to **create web servers** and **handle HTTP requests and responses**.  
It’s the foundation on which frameworks like **Express.js** are built 🚀.

---

## 📌 Why use the `http` module?  

- Built into Node.js (no installation required).  
- Helps in creating simple web servers.  
- Forms the basis for backend frameworks like **Express.js**, **Koa**, and **NestJS**.  
- Gives low-level control over request & response handling.  

---

## ⚙️ Basic Usage  

### ✅ Importing the module

```js
const http = require('http');
```

### ✅ Creating a server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World! 🌍');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

## 📚 Commonly Used Methods & Properties

| **Method / Property**            | **Description**                               |
| -------------------------------- | --------------------------------------------- |
| `http.createServer()`            | Creates a new HTTP server.                    |
| `server.listen(port, cb)`        | Binds server to a port and executes callback. |
| `req.url`                        | URL of the request.                           |
| `req.method`                     | HTTP method (GET, POST, etc.).                |
| `res.writeHead(status, headers)` | Writes response status code & headers.        |
| `res.write(data)`                | Sends response body data.                     |
| `res.end([data])`                | Ends response.                                |

---

## 🧑‍💻 Handling Different Routes

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🏠 Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ℹ️ About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('❌ Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

## 🛠️ Features of http module

- Lightweight & low-level.

- Event-driven (server emits events like 'request', 'connection').

- Full control over headers, status codes, and response data.

- Acts as the base layer for popular frameworks.

---

## 🚀 Real-world Usage

- Serve static content.

- Build REST APIs.

- Create mock/test servers.

- Understand the internals of frameworks like Express.js.

---

## ✨ Next Steps

- Understand request & response cycle.

- Try writing basic routes.

- Move towards using Express.js for easier development
