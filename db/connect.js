const mongoose = require("mongoose");

const DB_URI = "mongodb://127.0.0.1:27017/website"

const connectDB = async()=>{
    mongoose.connect(DB_URI).then(()=>console.log("connected to DB at ", DB_URI)).catch((e)=>console.log("Failed to connect to DB", e))
}

module.exports = connectDB;