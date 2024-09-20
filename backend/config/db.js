import mongoose from "mongoose";

 export const connectDB= async()=>{

    await mongoose.connect('mongodb+srv://ahmad2:001101@cluster0.hpmfw.mongodb.net/food-del').then(()=>console.log("DB Connected"));


}