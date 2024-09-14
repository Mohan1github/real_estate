const {jwt} = require("jsonwebtoken")

const verifyuser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        console.log("token not found")
        return res.status(404).json({success:false,msg:"unauthorised"})
    }
    else{
        jwt.verify(token,process.env.JWT_TOKEN,(err,decode)=>{
            if(err){
                console.log("An error occured with the failed status")
            }
            req.user = decode;
        })
    }
    next();
}


module.exports = {verifyuser}