const mongoose = require("mongoose")
const Schema = mongoose.Schema

const requestSchema = new Schema({
    sentby:{
       type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    isAproved:{
        type:Boolean
    }
},
{timestapms:true}
)
const Request = mongoose.model("requests",requestSchema);
module.exports = {Request}