const mongoose = require('mongoose');

// Define the CreateUserSchema for user data
const CreateUserSchema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true,
        },
        lastname:{
            type: String,
            required: true,
        },
        mobilenumber:{
            type: Number,
            required: true,
        },
        email_id:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        confirmPassword :{
            type: String,
            required: true,
        },    
    },
    {
        timestamps:
        {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

const CreateUserModel = mongoose.model("CreateUserModel", CreateUserSchema, "CreateUserModel");


module.exports = {CreateUserModel};


