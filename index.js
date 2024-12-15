const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express();




//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute)


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});


mongoose.connect("mongodb+srv://mohanhuzzain:FbR89p6vPz99BPuD@backenddb.x3xta.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
}).catch(()=>{
    console.log("Connection failed");
});



