const delete_product = async (req, res) => {
    try {
        const {id} = await req.params
        const data = await productCollection.deleteOne({_id: id})
        res.json({sucess: "Sucess to delete Product."})
    } catch (error) {
        res.json({failed: "Failed to delete Product."})
        console.log(error)
    }
}

module.exports = delete_product;