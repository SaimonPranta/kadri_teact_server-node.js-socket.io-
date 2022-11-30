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
const get_products = require("./Routes/get_products");
const single_product = require("./Routes/single_product");
const io_get_product = require("./SocketRoutes/io_get_products");
const io_add_product = require("./SocketRoutes/io_add_product");
const io_delete_product = require("./SocketRoutes/io_delete_product");
const io_update_product = require("./SocketRoutes/io_update_product");
const add_order = require("./Routes/add_order");
const all_orders = require("./Routes/all_orders");
const update_order = require("./Routes/update_order");
const delete_order = require("./Routes/delete_order");
const io_get_orders = require("./SocketRoutes/io_get_oders");
const io_add_orders = require("./SocketRoutes/io_add_order");
const io_update_order = require("./SocketRoutes/io_update_order");
const io_delete_order = require("./SocketRoutes/io_delete_product");

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 7000;
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH"]
    }
})


// =========Routes=============
app.get("/", root)

// =========Product Routes=============
app.get("/get_products", get_products)
app.post("/add_product", add_product)
app.post("/update_product", update_product)
app.delete("/delete_product/:id", delete_product)

app.get("/single_product/:id", single_product)

// =========Order Routes=============
app.get("/all_orders", all_orders)
app.post("/add_order", add_order)
app.post("/update_order", update_order)
app.delete("/delete_order/:id", delete_order)






// =========Socket.io=============
let user = [];

const removeUser = (socketID) => {

    user = user.filter(user => user.socketID !== socketID)
}

const addUser = (userId, socketID) => {
    if (!user.some(user => user.userId === userId)) {
        user.push({ userId, socketID })
    }
}

io.on('connection', (socket) => {

    // ==========Product CURD==========
    io_get_product(socket)
    socket.on("add_product", (productInfo) => {
        io_add_product(productInfo)
    })
    socket.on("update_product", (productInfo) => {
        io_update_product(productInfo)
    })
    socket.on("delete_product", (productID) => {
        io_delete_product(productID)
    })

    // ==========Order CURD==========
    io_get_orders(socket)
    socket.on("add_order", (orderInfo) => {
        io_add_orders(orderInfo)
    })
    socket.on("update_order", (orderInfo) => {
        io_update_order(orderInfo)
    })
    socket.on("delete_order", (orderID) => {
        io_delete_order(orderID)
    })



    // when user are disconnect
    socket.on("disconnect", () => {
        removeUser(socket.id)
        console.log(`user disconnected ID NO: ${socket.id}`)
    })
});




server.listen(port, () => {
    console.log(`we are now on PORT: ${port}`)
})
