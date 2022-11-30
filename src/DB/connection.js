const mongoose= require("mongoose")



const uri =  "mongodb://127.0.0.1:27017/ProductInfo"
// const uri =  `use your MongoBD Conncetiong String...!`

mongoose.connect(uri)
.then(sucess=> {
    console.log("sucessfully connected to database")
})
