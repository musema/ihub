import * as mongoose from 'mongoose';
import { IComment } from './comment';

export interface IIdea {
    id?: string;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    comments?: IComment[];
    likes?: number;
    disLikes?: number;
    tags?: string[];
    images?: string[]
}

export interface INewIdea {
    title: string;
    description: string;
    tags?: string[];
    images?: string[]
}
