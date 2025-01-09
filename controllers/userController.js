const User = require("../models/UserModel.js");
console.log("User Controller Run 4")
// Controller for creating a user
const signUp = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json({ success: true, message: "User registered!", data: savedUser });
    } catch (error) {
        next(error);
    }
};
// Controller for fetching all users
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};
// Controller for deleting a user
const deleteUser = async (req, res, next) => {
    const userId = req.params.id;

    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format.",
        });
    }

    try {
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found. Deletion unsuccessful.",
            });
        }

        res.status(200).json({
            success: true,
            message: "User successfully deleted.",
        });
    } catch (error) {
        next(error);
    }
};
// Controller for updating a user
const updateUser = async (req, res, next) => {
    const { _id, ...updateData } = req.body;

    if (!_id) {
        return res.status(400).send("User ID is required");
    }

    try {
        
        const updatedUser = await User.findByIdAndUpdate(_id, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.status(200).json({
            message: "User data updated successfully",
            data: updatedUser
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { signUp, getUsers, deleteUser, updateUser };
