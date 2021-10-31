import express from 'express';
import ideaService from '../services/idea.service';

interface IIdeaController {
    getIdeas: (req: express.Request, res: express.Response) => void;
    addIdea: (req: express.Request, res: express.Response) => void;
    getIdeaById: (req: express.Request, res: express.Response) => void;
}

export class IdeaController implements IIdeaController {
    public getIdeas = async (req: express.Request, res: express.Response) => {
        const ideas = await ideaService.get();
        res.status(200).send(ideas);
    };

    public addIdea = async (req: express.Request, res: express.Response) => {
        const result = await ideaService.create({
            title: 'new and fresh idea',
            description: 'just another fresh idea'
        });
        res.status(200).send(result);
    };

    public getIdeaById = async (req: express.Request, res: express.Response) => {
        const result = await ideaService.getById(req.params.ideaId);
        res.status(200).send(result);
    };

}