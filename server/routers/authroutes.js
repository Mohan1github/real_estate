const express = require("express")
const Authrouter  = express.Router()

const {registercontroller,logincontroller,logout} = require("../controllers/authcontoller")

Authrouter.post("/sign-up",registercontroller)
Authrouter.post("/sign-in",logincontroller)
Authrouter.post("/logout",logout)

module.exports = {Authrouter}