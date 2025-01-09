
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes.js");
console.log("App file 2");
const errorHandler = require("./middleware/errorHandler.js");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Parse JSON
app.use("/api", userRoutes); // Prefix routes with `/api`
app.use(errorHandler); // Handle errors

module.exports = app;
