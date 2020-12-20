import {Schema, model, SchemaTypes} from 'mongoose';

const GoalSchema = new Schema({
    description: String,
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
      },
    goalDate: Date,
    created: Date,
    updated: Date
});



export default model('Goal', GoalSchema);