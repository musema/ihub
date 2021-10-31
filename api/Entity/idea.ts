import * as mongoose from 'mongoose';
import { IIdea } from '../models/idea';

const ideaSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },
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
        id: false,
    },
);

export const Idea = mongoose.model('Idea', ideaSchema);

