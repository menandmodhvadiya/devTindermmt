console.log("Server File 1")
const connectionDb = require("./config/dbConnection.js");
const app = require("./app.js");


const PORT = process.env.PORT || 3000;

connectionDb(); // Connect to database
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
