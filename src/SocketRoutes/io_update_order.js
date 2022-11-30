const orderCollection = require("../DB/Models/orderCollection")

const io_update_order = async (info) => {
    try {
        console.log("hello")
        const { _id, buyerID, productID, quantity, orderStatus } = await info
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
    } catch (error) {
        console.log("Failed to update product")
    }
}

module.exports = io_update_order;