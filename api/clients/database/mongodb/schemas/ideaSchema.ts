import mongoose from 'mongoose';

export const ideaSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
        id: false,
    },
);
