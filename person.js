import mongoose from 'mongoose';

//schema making it unique
const personSchema = new mongoose.Schema({
    email: {type:String,required:true,unique:true}, //making email unique so that if again posted it will show error
    name: {type:String,required:true},
    age: {type:Number,required:true},
    userOrder:{type:Object,default:{}}
},
{
    timestamps:true,minimize:false
});

// Export the model from a function whose 1st para is person as string and 2nd para is schema
export const person = mongoose.model("person", personSchema);

