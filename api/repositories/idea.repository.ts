import * as mongoose from 'mongoose';
import mongoClient from '../clients/mongodb';
import shortid from 'shortid';
import { IIdea } from '../models/idea';


class IdeaRepository {
// TODO move this to Entity
private ideaSchema = new mongoose.Schema(
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
            // required: true
        }
    },
    {
        timestamps: true,
        id: false,
    },
);

private Idea = mongoClient.getClient().model('Idea', this.ideaSchema);

    constructor() {  }

    async add(newIdea: IIdea) {
        const id = shortid.generate();
        const idea = new this.Idea({
            _id: id,
            ...newIdea,
        });
        await idea.save();
        return id;
    }

    async getById(id: string) {
        return this.Idea.findOne({ _id: id }).populate('Idea').exec();
    }

    async deleteById(id: string) {
        return this.Idea.deleteOne({ _id: id }).exec();
    }

    async get(limit = 10, page = 0) {
        return this.Idea.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
}

export default new IdeaRepository();