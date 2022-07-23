const express=require("express");
// const mongoose=require("mongoose")
const connect=require("./configs/db")
// const Car=require("./models/car.model");

const carController=require("./controller/car.controller")
const userController=require("./controller/user.controller")
const app=express();
app.use(express.json());

// step 2 create schema


app.use("/car",carController)
app.use("/user",userController)

app.listen(process.env.PORT || 5500,async function (){
   try{
      await connect()
   console.log("listening on port 2345")  
   }
  catch(err){
   console.log("some error")
  } 
})