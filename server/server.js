const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
// const morgan = require("morgan");
require('dotenv').config()
const { Authrouter } = require("./routers/authroutes");
const {Userrouter} = require("./routers/userroutes");
const {listingrouter} = require("./routers/listingroutes")
const corsOption = ["http://localhost:3000","http://localhost:5001"]
app.use(bodyParser.json())
app.use(cors())
// app.use(morgan())
app.use(cors(corsOption))
app.use("/api/v1/users",Userrouter)
app.use("/api/v1/user-auth",Authrouter)
app.use("/api/v1/property",listingrouter)
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log("Mongoose connected successfully..."))
.catch(err => console.log("Something went wrong in connecting database:", err))
const PORT  = 5001;
app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`)
});