const orderCollection = require("../DB/Models/orderCollection");

const all_orders = async (req, res) => {
    try {
        const data = await orderCollection.find();
        res.json({data})
    } catch (error) {
        res.json({failed: "Failed to Fetch Order"})
    }
}

module.exports = all_orders;