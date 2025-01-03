const express = require("express");
const app = express();

app.use(
    "/user",
    [
        (req, res, next) => {
            console.log("Running to responded 1st");
            next(); // Ensure you call next() to pass control to the next middleware
        },
        (req, res, next) => {
            console.log("Running to responded 2nd");
            next(); // Continue to the next middleware
        },
        (req, res, next) => {
            console.log("Running to responded 3rd");
            next(); // Pass to the next middleware
        },
        (req, res, next) => {
            console.log("Running to responded 4th");
            next(); // Pass to the next middleware
        },
        (req, res) => {
            console.log("Running to responded 5th");
            res.send("5th Responded"); // Send a response to the client
        },
    ]
);

app.listen(1313, () => {
    console.log("Server is running on port 1313...");
});
