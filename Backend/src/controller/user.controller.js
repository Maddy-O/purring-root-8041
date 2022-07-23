const express=require("express");
const User=require("../models/user.model")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require("dotenv").config();
// const JWT_SECRET_KEY="key";
// name:{type:String,required:true},
// phoneno:{type:String,required:true},
// email:{type:String,required:true},
// password:{type:String,required:true},
// address:{type:String,required:true},


const router=express.Router();
router.post("/signup",async(req,res,next)=>{
// validation
let existingUser;
try{
    existingUser=await User.findOne({email:req.body.email})
}catch(err){
    console.log(err)
}
if(existingUser)
{
    return res.send({message:"user registered before"})
}

const hashPassword=bcrypt.hashSync(req.body.password)


    const user=new User({
        name:req.body.name,
        phoneno:req.body.phoneno,
        email:req.body.email,
        password:hashPassword,
        address:req.body.address

    });

    try{
        await user.save();
    }catch(err){
        console.log(err)
    }
    return res.status(201).send(user)

})
// LOGIN
router.post("/login",async(req,res,next)=>{
    // const {email,password}=req.body;

    let existingUser;
    try{
        existingUser=await User.findOne({email:req.body.email})
    }catch(err)
    {
        console.log(err)
    }
   if(!existingUser){
    return res.status(400).send({message:"user not found go and signup"})
   }
//    but if user is present then how to check password ,because is encypted
const isPasswordCorrect=bcrypt.compareSync(req.body.password,existingUser.password)

if(!isPasswordCorrect)
{
    return res.status(400).send({message:"password is incorrect"})
}

const token=jwt.sign({id:existingUser._id},process.env.JWT_SECRET_KEY,{expiresIn:"3hr"})
return res.status(200).send({message:"sucesfully Loggediin",user:existingUser,token})

});



module.exports=router;