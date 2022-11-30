const orderCollection = require("../DB/Models/orderCollection");

const io_get_orders = async (socket) => {
    try {
        const data = await orderCollection.find();
        socket.send({ data: data })
    } catch (error) {
        socket.send({ failed: "sorry failed to fetch data" })
    }
}

module.exports = io_get_orders;