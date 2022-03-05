const mongoose = require("mongoose");

const billingSchema = mongoose.Schema({
    name: {type: String, default: null},
    address: {type: String, default: null},
    date: {type: String, default: new Date()},
    productDetails: [{
        description: String,
        quantity: Number,
        rate: String
    }],
    role: {type: String, default: null},
    isDeleted: {type:Boolean, default: false},
    invoiceId: {type: String, default: null}
}, {
    timestamps: true
});

module.exports = mongoose.model("Billing", billingSchema);