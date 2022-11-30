const productCollection = require("../DB/Models/productsCollection");

const io_get_product = async (socket) => {
    try {
        const data = await productCollection.find();
        socket.send({ data: data })
    } catch (error) {
        socket.send({ failed: "sorry failed to fetch data" })
    }
}

module.exports = io_get_product;