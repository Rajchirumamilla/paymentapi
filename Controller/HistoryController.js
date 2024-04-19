const { TransactionSchemaModel } = require('../models/TransactionsAmt');

exports.GetHistoryDetails = async (req, res) => {
    try {
        const { name } = req.query;
        const query = { IsDeleted: false }
        let conditions = [];
        const data = await TransactionSchemaModel.find(query)
        return res.status(200).json({ success: true, data: data, message: "History Details fetched sucessfully" })
    }
    catch (err) {
        console.log("Error History Details:", error);
        return res.status(500).json({ success: false, message: "History Details failed", error: error });
    }
};