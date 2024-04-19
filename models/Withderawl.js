// Defining a Withdrawlschema for WithdrawlModel
const mongoose = require('mongoose');

const WithdrawlSchema = new mongoose.Schema(
    {
        WithdrawlType: {
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


const WithdrawlSchemaModel = mongoose.model("WithdrawlSchemaModel", WithdrawlSchema, "WithdrawlSchemaModel");
module.exports = { WithdrawlSchemaModel };