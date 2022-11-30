const productCollection = require("../DB/Models/productsCollection")

const delete_product = async (req, res) => {
    try {
        const {id} = await req.params

        const data = await productCollection.deleteOne({_id: id})
        if (data.deletedCount) {
            res.json({sucess: "Sucess to delete Product."})
        }else{
            res.json({failed: "Failed to delete Product."})
        }
        
    } catch (error) {
        res.json({failed: "Failed to delete Product."})
    }
}

module.exports = delete_product;