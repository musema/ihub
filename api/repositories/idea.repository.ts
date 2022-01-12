import shortid from 'shortid';
import { IIdea } from '../models/idea';
import { Idea } from '../entites/idea';

/*
* @TODO: Idea repository tightly coupled with mongoose schema, this need to be avoided
*/
class IdeaRepository {
    constructor() { }

    async get(page: number, limit: number) {
        return Idea.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
    async getById(id: string) {
        return Idea.findOne({ _id: id }).exec();
    }
    async add(newIdea: IIdea) {
        const id = shortid.generate();
        const idea = new Idea({
            _id: id,
            ...newIdea,
        });
        await idea.save();
        return idea;
    }
    async update(id: string, updatedIdea: IIdea) {
        const result = await Idea.findByIdAndUpdate(id, updatedIdea);
        return result;
    }

    async deleteById(id: string) {
        return Idea.deleteOne({ _id: id }).exec();
    }

    async search(query: any) {

    }
}

export default new IdeaRepository();