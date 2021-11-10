import { IComment } from "./comment";

export interface IIdea {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt?: string;
    comments?: IComment[];
    likes?: number;
    disLikes?: number;
    tags?: string[];
    images?: string[]
}
