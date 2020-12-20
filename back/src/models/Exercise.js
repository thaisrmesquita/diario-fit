import {Schema, model, SchemaTypes} from 'mongoose';

const ExerciseSchema = new Schema({
    name: String,
    exerciseType: {
        type: SchemaTypes.ObjectId,
        ref: 'ExerciseType',
      },
    created: Date,
    updated: Date
});



export default model('Exercise', ExerciseSchema);