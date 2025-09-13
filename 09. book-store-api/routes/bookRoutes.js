import express from "express";

const router = express.Router();

// @desc - get all books
router.get("/get");

// @desc - get single book by ID
router.get("/get/:id");

// @desc - create new book
router.post("/add");

// @desc - delete a book
router.delete("/delete/:id");

// @desc - update a book
router.put("/update/:id");

export default router;
