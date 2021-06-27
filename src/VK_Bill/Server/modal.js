const mongoose = require("mongoose");

const billingSchema = mongoose.Schema({
    name: String,
    address: String,
    date: String,
    productDetails: [{
        description: String,
        quantity: Number,
        rate: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Billing", billingSchema);