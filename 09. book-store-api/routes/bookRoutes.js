import express from "express";

const router = express.Router();

// @desc - get all books
router.get("/");

// @desc - get single book by ID
router.get("/:id");

// @desc - create new book
router.post("/");

// @desc - delete a book
router.delete("/:id");

// @desc - update a book
router.put("/:id");

export default router;
