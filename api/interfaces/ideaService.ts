import { IIdea } from "../models/idea";
import { IGetOptions } from "./getOptions";
import { ISearchQuery } from "./searchQuery";

export interface IIdeaService {
    get: (options: IGetOptions) => Promise<IIdea[]>;
    getById: (id: string) => Promise<IIdea | null>;
    create: (idea: IIdea) => Promise<boolean>;
    update: (id: string, updated: IIdea) => Promise<boolean>;
    delete: (id: string) => Promise<boolean>;
    search: (query: ISearchQuery) => Promise<IIdea[] | null>;
}