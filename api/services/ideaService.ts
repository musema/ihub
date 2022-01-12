import { IIdeaService, IGetOptions, ISearchQuery } from '../interfaces';
import IdeaRepository from '../repositories/ideaRepository';
import { IIdea } from '../models/idea';

class IdeaService implements IIdeaService {

    async get(options: IGetOptions): Promise<IIdea[]> {
        return await IdeaRepository.get(options);
    }

    async getById(id: string): Promise<IIdea | null> {
        return await IdeaRepository.getById(id);
    }

    async create(idea: IIdea): Promise<boolean> {
        return await IdeaRepository.create(idea);
    }

    async update(id: string, updatedIdea: IIdea): Promise<boolean> {
        return await IdeaRepository.update(id, updatedIdea);
    }

    async delete(id: string): Promise<boolean> {
        return await IdeaRepository.delete(id);
    }

    async search(query: ISearchQuery): Promise<IIdea[] | null> {
        throw new Error('Not implemented');
    }

}

export default new IdeaService();