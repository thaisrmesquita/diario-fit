import {Schema, model, SchemaTypes} from 'mongoose';

const WeightSchema = new Schema({
    weight: Number,
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
      },
    created: Date,
    updated: Date
});

export default model('Weights', WeightSchema);