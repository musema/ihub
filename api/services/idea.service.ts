import express from 'express';
import IdeaRepository from '../repositories/idea.repository';
import { IIdea } from '../models/idea';

class IdeaService {

    async get(page: number=0, limit: number = 10) {
        return await IdeaRepository.get(page, limit);
    }

    async getById(id: string) {
        return await IdeaRepository.getById(id);
    }

    async add(idea: IIdea) {
        return await IdeaRepository.add(idea);
    }

    async update(id: string, updatedIdea: IIdea) {
        return await IdeaRepository.update(id, updatedIdea);
    }

    async deleteById(id: string) {
        return await IdeaRepository.deleteById(id);
    }

    async search(query: any) {
        return await IdeaRepository.search(query);
    }

}

export default new IdeaService();