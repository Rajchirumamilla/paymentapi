// Defining a PaymentSchema for PaymentTypeModel
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema(
    {
        PaymentType: {
            type: String,
            required: true
        },
        PaymentName: {
            type: String,
            required: true
        },
        IsDeleted: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "uodated_at"
        }
    }
);


const PaymentSchemaModel = mongoose.model("PaymentTypeModel", PaymentSchema, "PaymentTypeModel");
module.exports = { PaymentSchemaModel };