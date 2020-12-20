import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: String,
    cpf: String,
    email: String,
    password: String,
    start_weight: Number,
    wished_weight: Number,
    date_birth: Date,
    created: Date,
    updated: Date
});

export default model('User', UserSchema);