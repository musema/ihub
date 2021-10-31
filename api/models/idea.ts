import * as mongoose from 'mongoose';

export interface IIdea extends mongoose.Document {
    tite: string;
    description: string;
}

