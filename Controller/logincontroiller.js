const { CreateUserModel } = require('../models/createuser');

exports.Createuser = async (req, res) => {
    try {
        const data = req.body;
        const user = await CreateUserModel.create(data);
        console.log(user)
        return res.status(200).json({ success: true, data: user, message: "User created sucessfully" })
    }
    catch (error) {
        console.log("Error saving User:", error);
        return res.status(500).json({ success: false, message: "User failed to save" });
    }
};

exports.Loginuser = async (req, res) => {
    try {
        const data = req.body;
        console.log("Login request data:", data);
        const user = await CreateUserModel.findOne({ email_id: data.email_id, password: data.password }).select('email_id password');

        // If no user found with the provided credentials
        if (!user) {
            console.error("User not found for credentials:", data.email_id, data.password);
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        // If user found, return success response
        console.log("User logged in successfully:", user.email_id);
        return res.status(200).json({ success: true, data: user, message: "User logged in successfully" });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ success: false, message: "User login failed" });
    }
};

exports.GetAllUser = async (req, res) => {
    try {
        const data = await CreateUserModel.find();
        return res.status(200).json({ success: true, data: data, message: "All Users fetched successfully" });
    } catch (error) {
        console.error("Error fetching all users:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch all users" });
    }
};



