import mongoose from "mongoose";


export const connectToDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Ddatabase connected');
    } catch (error) {
        console.log('Database Connection Failed: ',error.message);
        process.exit(1)
    }
}