const productCollection = require("../DB/Models/productsCollection");


const single_product = async (req, res) => {

    const {id} = await req.params;
    try {
        const data = await productCollection.findOne({_id: id});
        res.json({data})
    } catch (error) {
        res.json({failed: "Failed to Fetch Products"})
    }
}


module.exports = single_product;