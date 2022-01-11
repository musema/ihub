import express from 'express';
import { IIdea } from '../models/idea';
import ideaService from '../services/idea.service';

interface IIdeaController {
    getIdeas: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    addIdea: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    updateIdea: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    deleteIdea: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    getIdeaById: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    searchIdea: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
}

class IdeaController implements IIdeaController {

    public getIdeas = async (req: express.Request, res: express.Response) => {
        const page = req.query.page ? parseInt(req.query.page.toString()) : undefined;
        const limit = req.query.limit ? parseInt(req.query.limit.toString()) : undefined;

        const ideas = await ideaService.get(page, limit);
        res.status(200).send(ideas);
    };

    public getIdeaById = async (req: express.Request, res: express.Response) => {
        const result = await ideaService.getById(req.params.id);
        res.status(200).send(result);
    };

    public addIdea = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { title, description } = req.body;
        const newIdea: IIdea = {
            title,
            description
        }
        const result = await ideaService.add(newIdea);
        res.status(200).send(result);
    };

    public updateIdea = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const id = req.params.id;
        const updatedIdea = req.body;
        const result = await ideaService.update(id, updatedIdea);
        res.status(200).send(result);
    };

    public deleteIdea = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const id = req.params.id;
        const result = await ideaService.deleteById(id);
        res.status(200).send(result);
    };

    public searchIdea = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const query = req.query;
        const result = await ideaService.search(query);
        res.status(200).send(result);
    };
}

export default new IdeaController();
