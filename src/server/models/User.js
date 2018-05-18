import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
    }
});