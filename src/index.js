const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app)
require("./DB/connection");
const root = require("./Routes/root");
const add_product = require("./Routes/add_product");
const update_product = require("./Routes/update_porduct");
const delete_product = require("./Routes/delete_product");


const port = process.env.PORT || 7000;
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH"]
    }
})


// =========Routes=============
app.get("/", root)
app.post("/add_product", add_product)
app.fetch("/add_product", update_product)
app.delete("/delete_product", delete_product)





server.listen( port, () => {
    console.log(`we are now on PORT: ${port}`)
})

