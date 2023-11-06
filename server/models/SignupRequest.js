import { Schema, model } from 'mongoose';

const SignupRequestSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: 'Pending' },
});

export default model('SignupRequest', SignupRequestSchema);
