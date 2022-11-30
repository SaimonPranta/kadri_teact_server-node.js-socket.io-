const productCollection = require("../DB/Models/productsCollection")

const io_update_product = async (info) => {
    try {
        const { _id, name, price, OldPrice, img } = await info
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
        console.log(data)
    } catch (error) {
        console.log("Failed to update product")
    }
}

module.exports = io_update_product;