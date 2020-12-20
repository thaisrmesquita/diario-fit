import {Schema, model} from 'mongoose';

const ExerciseTypeSchema = new Schema({
    name: String,
    created: Date,
    updated: Date
});



export default model('ExerciseType', ExerciseTypeSchema);