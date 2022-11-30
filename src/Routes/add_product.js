const productCollection = require("../DB/Models/productsCollection")

const add_product = async (req, res) => {
    try {
        const { name, price, OldPrice, img } = await req.body
        if (name && price) {
            const productInfo = await {
                name,
                price,
                OldPrice,
                img: "noting.png"
            }
            // await OldPrice ? productInfo["OldPrice"] = productInfo : false
            // await img ? productInfo["img"] = img : productInfo["img"] = "nothing.png"

            const productObj = await new productCollection(productInfo);
            const data = await productObj.save();
            res.json({ data })
        } else {
            res.json({ failed: "Failed to add product" })
        }

    } catch (error) {
        res.json({ failed: "Failed to add product" })
    }
}

module.exports = add_product;