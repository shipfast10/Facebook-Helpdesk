const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const fbRoutes = require("./routes/fb");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", authRoutes);   // /api/register, /api/login
app.use("/api", fbRoutes);     // /api/connect, /api/disconnect

app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});
