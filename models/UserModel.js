const mongoose = require("mongoose");
console.log("User Model Run 5")
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"],
        },
        age: { type: Number, min: 0, max: 120 },
        gender: { type: String, enum: ["Male", "Female", "Other"], default: "Other" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
