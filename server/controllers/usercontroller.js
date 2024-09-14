const express = require("mongoose")
const { Users } = require("../models/usermodel.js");
const bcrypt = require("bcryptjs/dist/bcrypt");


const updateuser = async (req, res) => {
    const { id } = req.params;

    if (req.user.id != req.params.id) {

        res.status(401).json({ success: false, msg: "you can only update only your own profile " })
    }
    try {       
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10)
        }
        const finduser = await Users.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            }
        })
        if(finduser){res.status(200).json({success:true,msg:"updated"
        })}
        else{
            res.status(400).json({msg:"something went wrong"})
        }
    }
    catch (err) {
        res.status(500).json({ success: false, msg: err })
    }
}
const getusers = async (req, res, next) => {
    try {
        const users = await Users.find()
        if (users) {
            res.status(200).json({ success: true, data: users })
        }
        else {
            res.status(401).json({ success: false, msg: "Something went wrong" })
        }
    }
    catch (err) {
        res.status(500).json({ success: false, msg: "Internal server error" })
    }
}
const getuserbyId = async (req,res) =>{
    const {id} = req.params;
    try{
        const user = await Users.findById(id)
        if(user){
            res.status(200).json({success:true,data:user})
        }
        else{
            res.status(404).json({success:false,msg:"user not found"})
        }
    }
    catch(err){
        res.status(500).json({msg:"inter server error",success:false})
    }
}
module.exports = { updateuser, getusers, getuserbyId }
