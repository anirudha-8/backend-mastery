# MongoDB Shell (`mongosh`)

The **MongoDB Shell (mongosh)** is an interactive JavaScript-based interface for interacting with MongoDB databases. It lets developers run queries, insert/update/delete documents, and perform administrative tasks directly in the database.

---

## 🔑 Key Features

* **Interactive Environment**: Execute commands and see results instantly.
* **CRUD Operations**: Create, Read, Update, and Delete documents.
* **JavaScript Support**: Since `mongosh` uses JavaScript syntax, you can write loops, conditionals, and functions.
* **Database Administration**: Create users, assign roles, manage indexes, and monitor performance.
* **Query Testing**: Quickly test queries before integrating them into applications.

---

## 📂 Basic Commands

### 1. Connecting

```bash
mongosh "mongodb+srv://<cluster-url>" --username <username>
```

### 2. Database Commands

```js
show dbs        // List all databases
use myDB        // Switch/create database
db              // Show current database
```

### 3. Collections

```js
show collections               // List all collections
db.createCollection("users")   // Create new collection
```

### 4. CRUD Operations

```js
// Insert
db.users.insertOne({ name: "Alice", age: 25 })

// Find
db.users.find({ age: { $gt: 20 } })
db.users.findOne({ name: "Alice" })

// Update
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })

// Delete
db.users.deleteOne({ name: "Alice" })
```

### 5. Aggregations

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } }
])
```

---

## ⚡ Real-World Industry Examples

* **E-commerce**: Quickly analyze sales trends by aggregating `orders` data in the shell.
* **Healthcare**: Query patient records based on conditions (e.g., `db.patients.find({ age: { $gte: 60 } })`).
* **Banking**: Run queries to detect suspicious transactions (e.g., filtering for high-value transfers).

---

## ✅ Why Developers Use It

* Fast way to prototype queries.
* Debugging database issues.
* Handy tool for database administrators (DBAs).
* Learning and exploring MongoDB without needing a GUI.

---

## 🚀 Pro Tip

Think of MongoDB Shell as the "command-line toolbox" of MongoDB. Once you master it, you'll be able to control and query any MongoDB database effectively, even without Compass or Atlas UI.
