import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

interface IIdea {
    tite: string;
    description: string;
}


export const Idea = mongoose.model<IIdea>('Idea', ideaSchema);

