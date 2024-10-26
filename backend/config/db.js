import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://nivethak1993:nivethak1993@cluster0.bpse1.mongodb.net/glowup-essentials').then(()=>console.log("DB connected"));
}