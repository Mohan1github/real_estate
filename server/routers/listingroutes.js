const express = require("express")
const listingrouter = express.Router()
const {createlisting,getallpropertylist,getpropertybyid} = require("../controllers/listingcontroller")
const {verifyuser} = require("../utils/verify")
listingrouter.post("/create-list",createlisting)
listingrouter.get("/get-listings",getallpropertylist)
listingrouter.get("/getproperty/:id",getpropertybyid)
module.exports = {listingrouter}