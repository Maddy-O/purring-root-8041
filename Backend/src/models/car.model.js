const mongoose=require("mongoose")
const carSchema=new mongoose.Schema({
    id:{type:Number,require:true},
    Name:{type:String,require:true},
    Seat:{type:Number,require:true},
    CarType:{type:String,require:true},
    Transmission:{type:String,require:true},
    DeliveryType:{type:String,require:true},
    Price:{type:String,require:true},
    Star:{type:Number,require:true},
    Type:{type:String,require:true},
    Distance_Traveled:{type:String,require:true},
    Damage_Protection_Package:{type:String,require:true},
    image:{type:String,require:true},
    Driven:{type:String,require:true}
 },{
    versionKey:false,
    timestamps:true
 }
 );
 
 // creating model
 
 
    module.exports=mongoose.model("car",carSchema);
 