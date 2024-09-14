const express = require("express")
const Request = require("../models/requestmodel.js")

const createrequest = async(req,res)=>{
    const {body} = req.body;
    try{
        const searchreq = await Request.find(body)
        if(searchreq){
            res.status(400).json({success:false,msg:"already exist"})
            console.log("Request already exsit");
        }
        else{
            const createnew = new Request({
                sentby:body.sentby,
            })
            const saving = await createnew.save()
            if(!saving){
                res.status(400).json({success:false,msg:"Error creating request"})
            }
            else{
                res.status(201).json({success:false,msg:"New request is created"})
                console.log("Done");
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"inetrnal server error"})
    }
}
const getallrequest = async(req,res)=>{
    try{
        const allreqs = await Request.find();
        if(allreqs.length > 0){
            res.status(200).json({success:true,data:allreqs})
        }
        else{
            res.status(404).json({success:false,msg:"No data found"});
            console.log("No request found");
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
        console.log("Internal server error");
    }
}

const getallrequestbyid = async(req,res)=>{
    const {id} = req.params;
    try{
        const req = await Request.findById({_id:id});
        if(req){
            res.status(200).json({success:true,data:req})
        }
        else{
            res.status(404).json({success:false,msg:"No data found"});
            console.log("No request found");
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
        console.log("Internal server error");
    }
}
module.exports = {createrequest,getallrequestbyid}
