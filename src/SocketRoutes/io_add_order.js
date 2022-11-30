const orderCollection = require("../DB/Models/orderCollection");

const io_add_orders = async (Info) => {
    try {
        const { buyerID, productID, quantity, orderStatus } = await Info
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
        } else {
            console.log("failed to add order")
        }

    } catch (error) {
        console.log("failed to add order")

    }
}

module.exports = io_add_orders;