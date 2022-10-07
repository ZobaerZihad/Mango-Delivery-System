const mongoose = require('mongoose')

const mangoSchema = mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 varients:[],
 prices:[],
 category:{
  type:String,
  required:true
 },
 image:{
  type:String,
  required:true
 },
 description:{
  type:String,
  required:true
 },

},{timestamps:true});

const mangoModel =mongoose.model('mango',mangoSchema);
module.exports=mangoModel;