import mongoose from "mongoose";
import validator from "validator";
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleat 3 characters"]
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleat 3 characters"]
    },

    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },

    phone:{
        type: String,
        required: true,
        minLength: [11, "Phone number must contain 11 Digits"],
        maxLength: [11, "Phone number must contain 11 Digits"],
    },

    message:{
        type: String,
        require: true,
        minLenght: [10, "Message number must contain atleat 10 characters"]
    },

});

export const Message = mongoose.model("Message", messageSchema)

