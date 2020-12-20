import {Schema, model} from 'mongoose';

const FoodTypeSchema = new Schema({
    description: String,
    created: Date,
    updated: Date
});



export default model('FoodType', FoodTypeSchema);