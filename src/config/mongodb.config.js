const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

mongoose.connect("mongodb://localhost:27017/blogify").then(()=>{
    console.log("connected to DB");
}).catch((err) =>{
    console.log(err?.message ?? "mongodb connection failed");
})