const mongoose= require("mongoose")
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    phoneno:{type:Number,required:true},
    email:{type:String,required:true,uniqe:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    


})

module.exports= mongoose.model("user",userSchema)