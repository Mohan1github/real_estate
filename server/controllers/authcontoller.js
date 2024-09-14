const { Users } = require("../models/usermodel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

const registercontroller = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const finduser = await Users.findOne({ name, email })

        if (finduser) {
            res.status(400).json({ success: false, msg: "user already exist" })
            console.log("User already exist")
            console.log(name, email, password)
        }
        else {
            const hashed = bcryptjs.hashSync(password, 15) // instead use hash directly
            const newuser = new Users({
                name: name,
                email: email,
                password: hashed
            })
            const save = await newuser.save()
            if (!save) {
                res.status(400).json({ success: false, msg: "user not created" })
            }     
            else {
                res.status(200).json({
                    success: true, data: {
                        name,
                        email
                    }
                })
                console.log(name, email, password)
            }
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
        console.log(err)
    }
}
const logincontroller = async (req, res, next) => {
    const {email,password} = req.body;
    try{
        const validuser = await Users.findOne({email})
        if(!validuser){
             res.status(404).json({success:false,msg:"User not found"})
        }
        else{
            const passed = bcryptjs.compareSync(password,validuser.password)
            const {password: pass, ...rest} = validuser._doc
            if(passed){
            const token = jwt.sign({id:validuser._id},process.env.JWT_SECRET,{expiresIn:"1d"})
            res.cookie("token",token,{httpOnly:true}).status(200).json({msg:"logged successfully",data:rest})
            }
            else{
                res.status(400).json({
                    msg:"Invalid credential"
                })
            }
        }
    }
    catch(err){
        res.status(500).json({msg:"Internal server error"})
    }
}
const logout = async(req,res)=>{
    try{
        const logout = res.cookie("token","")
        if(logout){
            res.status(200).json({success:true,msg:"Logged out!"})
        }
        else{
            res.status(401).json({success:false,msg:"something went wrong"})
        }

    }catch(err){
        res.status(500).json({success:false,msg:"internal server error"})
    }
}
module.exports = { registercontroller, logincontroller,logout}