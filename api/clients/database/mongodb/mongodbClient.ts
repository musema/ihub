import { FilterQuery, Schema } from 'mongoose';
import shortid from 'shortid';

import { IRepositoryClient } from "../../../interfaces/repositoryClient";
import mongooseClient from './mongodb';
import { ideaSchema } from './schemas/ideaSchema';

export class MongoDBClient<T> implements IRepositoryClient<T> {
    private Model;
    constructor() {
        this.Model = mongooseClient.getClient().model<T>("Idea", ideaSchema); // @TODO: Fix hardcoded values // make truly generic
    }
    get = (options: any): Promise<T[]> => {
        const page = options.page || 0;
        const limit = options.limit || 0;
        return this.Model.find()
        .limit(limit)
        .skip(limit * page)
        .exec();
    };

    getById = async (id: string): Promise<T | null> => {
        return this.Model.findOne({ _id: id } as FilterQuery<Schema>).exec();
    };

    create = async (entry: T): Promise<boolean> => {
        const id = shortid.generate();
        const newEntry = new this.Model({
            _id: id,
            ...entry,
        });
        await newEntry.save();
        return true;
    };

    update = async (id: string, updatedEntity: T) => {
        await this.Model.findByIdAndUpdate(id, updatedEntity);
        return true;
    };

    delete = async (id: string): Promise<boolean>=> {
        this.Model.deleteOne({ _id: id }  as FilterQuery<Schema>).exec();
        return true;
    };
    
}