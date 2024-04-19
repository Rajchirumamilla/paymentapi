const {WithdrawlSchemaModel} = require("../models/Withderawl")

exports.savewithdrawAmt = async (req, res) => {
    try {
        const data = req.body;
        const user = await WithdrawlSchemaModel(data);
        user.save();
        console.log(user)
        return res.status(201).json({ success: true, data: user, message: "Withdrawl saved sucessfully" })
    }
    catch (error) {
        console.log("Error Withdrawl type:", error);
        return res.status(500).json({ success: false, message: "failed to Withdrawl type", error: error });
    }
};

exports.GetwithdrwaDetails = async (req, res) => {
    try {
        const { name } = req.query;
        const query = { IsDeleted: false }
        let conditions = [];
        const data = await WithdrawlSchemaModel.find(query)
        return res.status(200).json({ success: true, data: data, message: "Withdrawl details fetched sucessfully" })
    }
    catch (err) {
        console.log("Error Withdrawl type:", error);
        return res.status(500).json({ success: false, message: "failed to Withdrawl type", error: error });
    }
};

exports.deletewithdrawDetailsById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await WithdrawlSchemaModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Withdrawl not found" });
        }
        return res.status(200).json({ success: true, data: data, message: "Withdrawl deleted successfully" });
    } catch (error) {
        console.log("Error Withdrawl payment by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to delete Withdrawl by ID" });
    }
};

exports.updatewithdrawDetailsById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTransaction = await WithdrawlSchemaModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "Withdrawl not found" });
        }
        return res.status(200).json({ success: true, data: updatedTransaction, message: "Withdrawl updated successfully" });
    } catch (error) {
        console.log("Error updating Withdrawl by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to update Withdrawl by ID" });
    }
};
