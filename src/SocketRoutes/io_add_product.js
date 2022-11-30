const productCollection = require("../DB/Models/productsCollection");

const io_add_product = async (Info) => {
    try {
        const { name, price, OldPrice, img } = await Info
        if (name && price) {
            const productInfo = await {
                name,
                price,
                OldPrice,
                img: "noting.png"
            }
            const productObj = await new productCollection(productInfo);
            const data = await productObj.save();
            console.log(data)
        } else {
            console.log("failed to add product")
        }

    } catch (error) {
        console.log("failed to add product")

    }
}

module.exports = io_add_product;