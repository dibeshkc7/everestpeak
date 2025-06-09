import express from "express";
const router = express.Router();

// Auth routes will go here
router.post("/register", (req, res) => {
  res.json({ message: "Register route" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login route" });
});

export default router;
