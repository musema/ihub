import mongoose from 'mongoose';
import { IIdea } from '../models/idea';

const ideaSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            // required: true
        },
        description: {
            type: String,
            // required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Idea = mongoose.model<IIdea>('Idea', ideaSchema);

