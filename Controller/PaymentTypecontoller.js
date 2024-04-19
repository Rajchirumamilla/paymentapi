const { PaymentSchemaModel } = require("../models/paymentType");

// savepaymentType to the database
exports.savePaymentType = async (req, res) => {
    try {
        const data = req.body;
        const user = await PaymentSchemaModel(data);
        user.save();
        console.log(user)
        return res.status(201).json({ success: true, data: user, message: "payment type saved sucessfully" })
    }
    catch (error) {
        console.log("Error payment type:", error);
        return res.status(500).json({ success: false, message: "failed to payment type", error: error });
    }
};

// GetPaymentTypeDetails from the database
exports.GetPaymentTypeDetails = async (req, res) => {
    try {
        const { name } = req.query;
        const query = { IsDeleted: false }
        let conditions = [];
        const data = await PaymentSchemaModel.find(query)
        return res.status(200).json({ success: true, data: data, message: "payment details fetched sucessfully" })
    }
    catch (err) {
        console.log("Error payment type:", error);
        return res.status(500).json({ success: false, message: "failed to payment type", error: error });
    }
};

//deletePaymentTypeDetailsById by its ID
exports.deletePaymentTypeDetailsById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await PaymentSchemaModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "payment not found" });
        }
        return res.status(200).json({ success: true, data: data, message: "payment deleted successfully" });
    } catch (error) {
        console.error("Error deleting payment by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to delete payment by ID" });
    }
};

// updatePaymentTypeDetailsById by its ID
exports.updatePaymentTypeDetailsById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTransaction = await PaymentSchemaModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "payment not found" });
        }
        return res.status(200).json({ success: true, data: updatedTransaction, message: "payment updated successfully" });
    } catch (error) {
        console.error("Error updating payment by ID:", error);
        return res.status(500).json({ success: false, message: "Failed to update payment by ID" });
    }
};
