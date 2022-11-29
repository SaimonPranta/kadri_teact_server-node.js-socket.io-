const mongoose= require("mongoose")



const uri =  "mongodb://127.0.0.1:27017/ProductInfo"
// const uri =  `mongodb+srv://saimon_pranta:${process.env.MONGODB_USER_PASSWORD}@cluster0.e6somin.mongodb.net/users`

mongoose.connect(uri)
.then(sucess=> {
    console.log("sucessfully connected to database")
})
