const orderCollection = require("../DB/Models/orderCollection");

const add_order = async (req, res) => {
    try {
        const { buyerID, productID, quantity, orderStatus } = await req.body
        if (buyerID && productID && quantity && orderStatus) {
            const orderInfo = await {
                buyerID,
                productID,
                quantity,
                orderStatus
            }

            const orderObj = await new orderCollection(orderInfo);
            const data = await orderObj.save();
            console.log(data)
            res.json({ data })
        } else {
            res.json({ failed: "Failed to add order" })
        }

    } catch (error) {
        console.log(error)
        res.json({ failed: "Failed to add order" })
    }
}

module.exports = add_order;