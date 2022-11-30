const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    buyerID: {
        type: String,
        require: true
    },
    productID: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    orderStatus: {
        type: String,
        require: true
    }
},
    {
        timestamps: true
    }
)

const orderCollection = new mongoose.model("Orders", orderSchema);

module.exports = orderCollection;