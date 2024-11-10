const asyncHandle = require('express-async-handler');
const CodeModel = require('../models/codeModel');
const saveCode = asyncHandle(async (req,res)=>{
    const requestBody=req.body;
    try{
        const newCode= new CodeModel(requestBody);
        const response = await newCode.save();
        return res.status(201).json({
            success:true,
            message:"Code Save Successfully",
            data:{
                code_id:response._id
            }
        })
    }catch(err){
        console.log("Failed to Save Code",err);
        return res.status(500).json({
            success:false,
            message:"Failed To Save"
        })
    }
    
});

const getCode =asyncHandle(async(req,res)=>{
    const codeId=req.params.codeId;
    try{
        const response = await CodeModel.findById(codeId);
        if(!response){
            return res.status(404).json({success:false,
                message:"Failed to get Code"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Successfully got the code",
            data:response
        })
    }catch(err){
        console.log("Failed to Save Code",err);
        return res.status(500).json({
            success:false,
            message:"Failed To Save"
        })
    }
    
});

const updateCode = asyncHandle(async(req , res)=>{
    const codeId=req.params.codeId;
    const requestBody =req.body;
    try{
        const response = await CodeModel.findByIdAndUpdate(codeId,requestBody);
        if(!response){
            return res.status(404).json({success:false,
                message:"Failed to Locate Code"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Successfully update the code",
            data:{
                code_id:response._id
            }
        })
    }catch(err){
        console.log("Failed to Save Code",err);
        return res.status(500).json({
            success:false,
            message:"Failed To Save"
        })
    }
});

module.exports={saveCode,getCode,updateCode};