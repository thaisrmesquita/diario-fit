import {Schema, model, SchemaTypes} from 'mongoose';

const UserSchema = new Schema({
    rightThigh: Number,
    leftThigh: Number,
    rightArm: Number,
    leftArm: Number,
    waist: Number,
    hip: Number,
    height: Number,
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
      },
    created: Date,
    updated: Date
});

export default model('Measures', UserSchema);