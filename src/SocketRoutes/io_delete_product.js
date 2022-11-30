const orderCollection = require("../DB/Models/orderCollection");

const io_delete_order = async (id) => {
    try {
        const data = await orderCollection.deleteOne({_id: id})
        console.log(data)
    } catch (error) {
        console.log("Failed to delete Product.")
    }
}

module.exports = io_delete_order;