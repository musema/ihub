import shortid from 'shortid';
import { IIdea } from '../models/idea';
import { Idea } from '../Entity/idea';

class IdeaRepository {
    constructor() { }

    async add(newIdea: IIdea) {
        const id = shortid.generate();
        const idea = new Idea({
            _id: id,
            ...newIdea,
        });
        await idea.save();
        return id;
    }

    async getById(id: string) {
        return Idea.findOne({ _id: id }).populate('Idea').exec();
    }

    async deleteById(id: string) {
        return Idea.deleteOne({ _id: id }).exec();
    }

    async get(limit = 10, page = 0) {
        return Idea.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
}

export default new IdeaRepository();