const express=require("express");
const router=express.Router();
const Car=require("../models/car.model")
router.get("/",async(req,res)=> {
    try{
        const cars=await Car.find().lean().exec();
        // console.log("hii")
        res.send(cars)
    }
    catch(e){
        return res.status(500).send(err.message);
    }
    
 })

 router.get("/:id", async (req, res) => {
    try {
      const fruits = await Car.findById(req.params.id)
        .lean()
        .exec();
      return res.send(fruits);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


 module.exports=router;
 