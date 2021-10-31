import mongoose from 'mongoose';
import mongoClient from '../clients/mongodb';
import shortid from 'shortid';
import { Idea as IdeaEntity } from '../Entity/idea';
import { IIdea } from '../models/idea';


class IdeaRepository {
    constructor() {  }

    async add(newIdea: IIdea) {
        const id = shortid.generate();
        const idea = new IdeaEntity({
            // _id: new mongoose.Schema.Types.ObjectId(id),
            ...newIdea,
        });
        await idea.save();
        return id;
    }

    async getById(id: string) {
        return IdeaEntity.findOne({ _id: id }).populate('Idea').exec();
    }

    async deleteById(id: string) {
        return IdeaEntity.deleteOne({ _id: id }).exec();
    }

    async get(limit = 10, page = 0) {
        return IdeaEntity.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
}

export default new IdeaRepository();