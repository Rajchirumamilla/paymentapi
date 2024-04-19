// Defining a TransactionSchema for TransactionSchemaModel
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
    {
        Date: {
            type: String,
            reguired: true,
        },
        Amount: {
            type: Number,
            reguired: true,
        },
        Name: {
            type: String,
            required: true,
        },
        PaymentType: {
            type: String,
            reguired: true,
        },
        Withdrawl:{
            type: String,
            required :true,
        },
        Remarks: {
            type: String,
            required: false,
        },
        Paymentid: {
            type: Number,
            required: false,
        },
        Debited: {
            type: String,
            required: false,
        },
        UtrNumber: {
            type: String,
            required: false,
        },
        IsDeleted: {
            type: Boolean,
            required : true,
            default: false,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    }    
);

const TransactionSchemaModel = mongoose.model("TransactionSchemaModel", TransactionSchema, "TransactionSchemaModel");
module.exports = {TransactionSchemaModel};
