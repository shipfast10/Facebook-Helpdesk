const express = require("express");
const router = express.Router();

// TEMP in-memory user store
let users = [];

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    if (users.find((u) => u.email === email)) {
        return res.status(400).json({ error: "User already exists" });
    }
    users.push({ name, email, password });
    console.log("✅ Registered:", name);
    res.json({ status: "registered" });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    res.json({ status: "logged_in", user: { name: user.name, email: user.email } });
});

module.exports = router;
