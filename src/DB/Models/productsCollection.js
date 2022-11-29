const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    OldPrice: {
        type: Number
    },
    img: {
        type: String,
        require: true
    },
    imgArray: {
        type: Array
    }
},
    {
        timestamps: true
    }
)

const productCollection = new mongoose.model("Product", productSchema);

module.exports = productCollection;