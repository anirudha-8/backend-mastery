# Mongoose

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js.
It provides a **schema-based solution** to model application data, making it easier to interact with MongoDB in a structured way.

---

## 🔑 Key Features

1. **Schemas & Models**

   * Define the structure of your documents using schemas.
   * Models are used to create and query documents.

   ```js
   const studentSchema = new mongoose.Schema({
     student_id: String,
     name: String,
     age: Number,
     department: String
   });

   const Student = mongoose.model('Student', studentSchema);
   ```

2. **Validation**

   * Ensures data meets rules before saving.

   ```js
   const studentSchema = new mongoose.Schema({
     name: { type: String, required: true },
     age: { type: Number, min: 18 }
   });
   ```

3. **CRUD Operations**

   ```js
   // Create
   const s = new Student({ student_id: "S1007", name: "Neha", age: 21 });
   await s.save();

   // Read
   const students = await Student.find({ department: "Computer Science" });

   // Update
   await Student.updateOne({ student_id: "S1007" }, { $set: { age: 22 } });

   // Delete
   await Student.deleteOne({ student_id: "S1007" });
   ```

4. **Middleware (Hooks)**

   * Pre/post hooks for save, update, remove.

   ```js
   studentSchema.pre('save', function(next) {
     console.log('A student is about to be saved');
     next();
   });
   ```

5. **Relationships**

   * Supports referencing other documents (like foreign keys) using ObjectId.

   ```js
   const enrollmentSchema = new mongoose.Schema({
     student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
     course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
     enrolled_on: Date
   });
   ```

6. **Aggregation & Query Helpers**

   * Mongoose supports MongoDB aggregation pipelines and custom query helpers.

---

## ⚡ Industry Example

* **E-commerce**: Products, users, and orders can be modeled using Mongoose schemas, making queries simple and structured.
* **Education Platform**: Students, courses, and enrollments are linked via ObjectIds; Mongoose helps populate related documents.
* **Social Media App**: Users, posts, and comments can have relationships modeled easily with schemas.

---

## ✅ Advantages

* Structured data with schemas.
* Easy validation.
* Supports relationships via ObjectIds.
* Integrates seamlessly with Node.js applications.
* Simplifies query building and aggregations.

---

## 🚀 Pro Tip

Think of Mongoose as a **bridge between MongoDB and your Node.js code**. It allows you to write structured, maintainable, and validated database interactions while still using all MongoDB features.
