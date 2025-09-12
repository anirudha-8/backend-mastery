const express = require("express");

const router = express.router();

// all book api related routes
router.get("/get");
router.get("/get/:id");
router.post("/add");
router.put("/update/:id");
router.delete("/delete/:id");

module.exports = router;
