console.log("User Routes Run 3")
const express = require("express");
const { signUp, getUsers, deleteUser, updateUser } = require("../controllers/userController.js");

const router = express.Router();

router.post("/signUp", signUp);
router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);
router.patch("/user", updateUser);

module.exports = router;
