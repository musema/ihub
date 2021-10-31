import IdeaRepository from '../repositories/idea.repository';
import { IIdea } from '../models/idea';

class IdeaService {
    async create(idea: any) {
        return await IdeaRepository.add(idea);
    }

    async deleteById(id: string) {
        return await IdeaRepository.deleteById(id);
    }

    async get(limit: number = 10, page: number=0) {
        return await IdeaRepository.get(limit, page);
    }

    async getById(id: string) {
        return await IdeaRepository.getById(id);
    }

}

export default new IdeaService();