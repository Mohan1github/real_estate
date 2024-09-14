const mongoose = require("mongoose")
const Schema = mongoose.Schema

const listingschema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regularPrice:{
        type:String,
        required:true
    },
    bedrooms:{
        type:Number,
        required:true
    },
    furnished:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    offer:{
        type:Boolean,
        required:true
    },
    ratings:{
        type:Number
    },
    imageurls:{
        type:String,
        required:true
    },
    userRef:{
        type:String,
        required:true
    }
},{timestamps:true})
const Listing = mongoose.model("listing",listingschema);

module.exports = {Listing}
