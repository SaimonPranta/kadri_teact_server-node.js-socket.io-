const orderCollection = require("../DB/Models/orderCollection")

const update_order = async (req, res) => {
    try {
        const { _id, buyerID, productID, quantity, orderStatus } = await req.body
        const orderInfo = await {}
        
        await buyerID ? orderInfo["buyerID"] = buyerID : false
        await productID ? orderInfo["productID"] = productID : false
        await quantity ? orderInfo["quantity"] = quantity : false
        await orderStatus ? orderInfo["orderStatus"] = orderStatus : false
        

        const data = await orderCollection.findOneAndUpdate(
            { _id },
            { ...orderInfo },
            { new: true }
        )
        console.log(data)
        res.json({ data })
    } catch (error) {
        res.json({ failed: "Failed to update product" })
    }
}

module.exports = update_order;