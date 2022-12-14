const productCollection = require("../DB/Models/productsCollection")

const update_product = async (req, res) => {
    try {
        const { _id, name, price, OldPrice, img } = await req.body
        const productInfo = await {}
        if (!_id) {
            res.json({ failed: "Failed to update product" })
            return
        }
        await name ? productInfo["name"] = name : false
        await price ? productInfo["price"] = price : false
        await OldPrice ? productInfo["OldPrice"] = OldPrice : false
        await img ? productInfo["img"] = img : false

        const data = await productCollection.findOneAndUpdate(
            { _id },
            { ...productInfo },
            { new: true }
        )
        res.json({ data })
    } catch (error) {
        res.json({ failed: "Failed to update product" })
    }
}

module.exports = update_product;