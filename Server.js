//server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
//dotenv.config();
const PORT = 3000;
//const PORT = process.env.PORT;

//Middleware
app.use (bodyparser.json());

//connect to MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/products",{
    useNewUrlparser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//routes
app.use("/products", require("./routes/products"));

//start server
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
});
