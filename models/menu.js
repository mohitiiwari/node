import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy', 'bitter', 'salty'],    
        required: true,
    },
    is_drink:{
        type: Boolean,
        default: false, 
    },
    ingredients: {
        type: [String],  // array of strings
        default: []
    },
    num_sales:{
        type: Number,
        default: 0
    },   
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
