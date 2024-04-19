const router = require('../Routes/TransactionAmt');
const { TransactionSchemaModel } = require('../models/TransactionsAmt');

// savetransactionhistory to the database
exports.savetransactionhistory = async (req, res) => {
    try {
        const data = req.body;
        const user = await TransactionSchemaModel(data);
        user.save();
        console.log(user);
        return res.status(200).json({ success: true, data: user, message: "Transaction saved successfully" });
    } catch (error) {
        console.log("Error saving transaction:", error);
        return res.status(500).json({ success: false, message: "Failed to save transaction" });
    }
};

// Fetch getAllTransactions from the database
exports.getAllTransactions = async (req, res) => {
    try {
        const data = await TransactionSchemaModel.find();
        return res.status(200).json({ success: true, data: data, message: "All transactions fetched successfully" });
    } catch (error) {
        console.error("Error fetching all transactions:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch all transactions" });
    }
};

// Fetch getTransactionById by its ID
exports.getTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await TransactionSchemaModel.findById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, data: data, message: "Transaction found successfully" });
    } catch (error) {
        console.error("Error finding transaction by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to find transaction by ID" });
    }
};

// deleteTransactionById by its ID
exports.deleteTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await TransactionSchemaModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, data: data, message: "Transaction deleted successfully" });
    } catch (error) {
        console.error("Error deleting transaction by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to delete transaction by ID" });
    }
};

// updateTransactionById by its ID
exports.updateTransactionById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTransaction = await TransactionSchemaModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        return res.status(200).json({ success: true, data: updatedTransaction, message: "Transaction updated successfully" });
    } catch (error) {
        console.error("Error updating transaction by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to update transaction by ID" });
    }
};