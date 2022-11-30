const orderCollection = require("../DB/Models/orderCollection")
const productCollection = require("../DB/Models/productsCollection")

const delete_order = async (req, res) => {
    try {
        const {id} = await req.params

        const data = await orderCollection.deleteOne({_id: id})
        if (data.deletedCount) {
            res.json({sucess: "Sucess to delete Order."})
        }else{
            res.json({failed: "Failed to delete Order."})
        }
        
    } catch (error) {
        res.json({failed: "Failed to delete Order."})
    }
}

module.exports = delete_order;