const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/users.json');

// Ensure file exists
if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');

// Register
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    let users = JSON.parse(fs.readFileSync(filePath));

    if (users.find(u => u.email === email)) {
        return res.json({ success: false, message: 'User already exists' });
    }

    users.push({ name, email, password });
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.json({ success: true });
});

// Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    let users = JSON.parse(fs.readFileSync(filePath));

    const user = users.find(u => u.email === email && u.password === password);
    if (user) res.json({ success: true });
    else res.json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;
