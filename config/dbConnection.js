const mongoose = require("mongoose");
console.log("DataBase COnnection is Done")
const connectionDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database successfully.");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectionDb;
