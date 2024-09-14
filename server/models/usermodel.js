const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userschema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        unique:true,
        required:true,
    },
    // role:{
    //     type:String,
    //     required:true
       
    // },
    avatar:{
        type:String,
    }

},{timestamps:true})

const Users = mongoose.model("user",userschema)
module.exports ={Users}