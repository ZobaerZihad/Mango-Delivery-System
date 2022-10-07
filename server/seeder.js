const mongoose =require('mongoose')
const dotenv=require('dotenv')
require('colors')
const connectDb=require('./config/config')
const Mango=require('./models/mangoModel')
const Mangos=require('./data/mango-data')


//config dot env and mongodb conn file
dotenv.config();
connectDb();

//import data
const importData = async ()=>{
 try{
  await Mango.deleteMany();
  const sampleData = Mangos.map(mango=>{return {...mango}})
  await Mango.insertMany(sampleData);
  console.log('Data imported'.bgGreen.white)
  process.exit();

 }
 catch(error){
  console.log(`${error}`.bgRed.white);
  process.exit(1);
 }
};
const dataDestroy=()=>{};
if(process.argv[2]==='-d'){
dataDestroy();

}
else{
 importData();
}