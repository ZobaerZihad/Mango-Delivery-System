const express = require("express")
const router=express.Router();
const mangoModel=require('../models/mangoModel')

//Get all mango || @get request
router.get('/getAllMangos',async (req,res)=>{
 try {
  const mangos=await mangoModel.find({});
  res.send(mangos);
 } catch (error) {
  res.json({message:error});
 }
});


router.post("/addmango", async (req, res) => {
  const mango = req.body.mango;
  try {
    const newMango = new mangoModel({
      name: mango.name,
      image: mango.image,
      varients: ["kgs_20", "kgs_40", "kgs_80"],
      description: mango.description,
      category: mango.category,
      prices: [mango.prices],
    });
    await newMango.save();
    res.status(201).send("New mango Added");
  } catch (error) {
    res.json({ message: error });
  }
});




router.post("/getmangobyid", async (req, res) => {
  const mangoId = req.body.mangoId;
  try {
    const mango = await mangoModel.findOne({ _id: mangoId });
    res.send(mango);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatemango", async (req, res) => {
  const updatedMango = req.body.updatedMango;
  try {
    const mango = await mangoModel.findOne({ _id: updatedMango._id });
    (mango.name = updatedMango.name),
      (mango.description = updatedMango.description),
      (mango.image = updatedMango.image),
      (mango.category = updatedMango.category),
      (mango.prices = [updatedMango.prices]);
    await mango.save();
    res.status(200).send("Mango Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});


router.post("/deletemango", async (req, res) => {
  const mangoId = req.body.mangoId;
  try {
    await mangoModel.findOneAndDelete({ _id: mangoId });
    res.status(200).send("Mango Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports=router;