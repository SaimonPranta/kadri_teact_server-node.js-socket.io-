const productCollection = require("../DB/Models/productsCollection")

const get_products = async (req, res) => {
    try {
        const data = await productCollection.find();
        res.json({data})
    } catch (error) {
        res.json({failed: "Failed to Fetch Products"})
    }
}

module.exports = get_products;