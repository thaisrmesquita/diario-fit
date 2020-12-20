import {Schema, model, SchemaTypes} from 'mongoose';

const ExerciseDaySchema = new Schema({
    repetitions: Number,
    exercise: {
        type: SchemaTypes.ObjectId,
        ref: 'Exercise',
      },
    created: Date,
    updated: Date
});

export default model('ExerciseDay', ExerciseDaySchema);