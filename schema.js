const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    about:{
        type:String
    },
    rating:{
        type:String
    },
    cod:{
        type:String
    },
    clothtype:{
        type:String
    },

})

const prod = mongoose.model("shopping",schema)
module.exports = prod;