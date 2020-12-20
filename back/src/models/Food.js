import {Schema, model, SchemaTypes} from 'mongoose';

const FoodSchema = new Schema({
    name: String,
    portionType: String,
    quantity: String,
    foodType: {
        type: SchemaTypes.ObjectId,
        ref: 'FoodType',
      },
    created: Date,
    updated: Date
});



export default model('Food', FoodSchema);