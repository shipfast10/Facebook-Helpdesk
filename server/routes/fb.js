const express = require("express");
const router = express.Router();

let connectedPage = null;

router.post("/connect", (req, res) => {
    const { pageId, accessToken, pageName } = req.body;
    connectedPage = { pageId, accessToken, pageName };
    console.log("📘 FB PAGE CONNECTED:", connectedPage);
    res.json({ status: "connected" });
});

router.post("/disconnect", (req, res) => {
    connectedPage = null;
    console.log("📴 FB PAGE DISCONNECTED");
    res.json({ status: "disconnected" });
});

module.exports = router;
