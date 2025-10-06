import mongoose from "mongoose";

// define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,   
        enum: ['chef', 'waiter', 'manager'],
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    }
});

// create the person model
const Person = mongoose.model('Person', personSchema);

export default Person;