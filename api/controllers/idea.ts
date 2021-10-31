import express from 'express';
import ideaService from '../services/idea.service';

interface IIdeaController {
    getIdeas: (req: express.Request, res: express.Response) => void;
    addIdea: (req: express.Request, res: express.Response) => void;
    getIdeaById: (req: express.Request, res: express.Response) => void;
}

export class IdeaController implements IIdeaController {
    public getIdeas = async (req: express.Request, res: express.Response) => {
        // res.status(200).send(`getting all ideas`);
        const ideas = await ideaService.get();
        res.status(200).send(ideas);
    };

    public addIdea = async (req: express.Request, res: express.Response) => {
        // res.status(200).send(`Idea is added`);
        const result = await ideaService.create({
            tite: 'new idea',
            description: 'just another idea'
        });
        res.status(200).send(result);
    };

    public getIdeaById = async (req: express.Request, res: express.Response) => {
        // res.status(200).send(`getting idea by id${req.params.ideaId}`);
        const result = await ideaService.getById(req.params.ideaId);
        res.status(200).send(result);
    };

}