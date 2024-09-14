const express = require("express");
const Userrouter = express.Router();

const {updateuser,getusers,getuserbyId} = require("../controllers/usercontroller");
const { verifyuser } = require("../utils/verify");

Userrouter.put("/update/:id",verifyuser,updateuser)
Userrouter.get("/getusers",getusers)
Userrouter.get("/getAuser/:id",verifyuser,getuserbyId)

module.exports = {Userrouter}