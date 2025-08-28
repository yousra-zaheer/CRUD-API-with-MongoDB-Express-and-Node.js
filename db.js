
import mongoose from 'mongoose';

export const connectDB = async () => {
    const MONGODB_URI = 'mongodb+srv://zaheeryousra7:<password here>@cluster0.akoboaj.mongodb.net/expresss?retryWrites=true&w=majority&appName=Cluster0';
     await mongoose.connect(MONGODB_URI) .then(() => {
      console.log('Database Connected');
    })
};