const router = require('../Routes/TransactionAmt')
const { TransactionSchemaModel } = require('../models/TransactionsAmt');

// Savereceivedamount to the database
exports.savereceivedamount = async (req, res) => {
    try {
        const data = req.body;
        const user = await TransactionSchemaModel.create(data);
        console.log(user)
        return res.status(200).json({ success: true, data: user, message: "Received amt sucessfully" })
    }
    catch (error) {
        console.log("Error saving transaction:", error);
        return res.status(500).json({ success: false, message: "failed to save receivedtransaction amount" });
    }
};

// Fetch getAllReceivedDetails from the database
exports.getAllReceivedDetails = async (req, res) => {
    try {
        const data = await TransactionSchemaModel.find({});
        return res.status(200).json({ success: true, data: data, message: "All transactions fetched successfully" });
    } catch (error) {
        console.log("Error fetching all transactions:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch all transactions" });
    }
};

// Fetch a getreceivedTransactionById by its ID
exports.getreceivedTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await TransactionSchemaModel.findById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "ReceivedTransaction not found" });
        }
        return res.status(200).json({ success: true, data: data, message: "ReceivedTransaction found successfully" });
    } catch (error) {
        console.error("Error finding Received transaction by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to find Receivedtransaction by ID" });
    }
};

// deletereceivedTransactionById by its ID
exports.deletereceivedTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await TransactionSchemaModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "ReceivedTransaction not found" });
        }
        return res.status(200).json({ success: true, data: data, message: "ReceivedTransaction deleted successfully" });
    } catch (error) {
        console.error("Error deleting Receivedtransaction by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to delete Receivedtransaction by ID" });
    }
};

// updatereceivedTransactionById by its ID
exports.updatereceivedTransactionById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTransaction = await TransactionSchemaModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "ReceivedTransaction not found" });
        }
        return res.status(200).json({ success: true, data: updatedTransaction, message: "ReceivedTransaction updated successfully" });
    } catch (error) {
        console.error("Error updating Receivedtransaction by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to update Receivedtransaction by ID" });
    }
};