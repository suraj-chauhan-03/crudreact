const mongoose = require("mongoose");

const connection = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017",{
            dbName : "dbcard"
        }).then((result)=>{console.log("database is connected" + result)})
        .catch((e)=>console.log("database is not connected" + e))
    } catch (error) {
        console.log("connection error" + error);
    }
}
module.exports = connection;




