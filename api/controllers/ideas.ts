import express from 'express';

interface IIdeaController {
    getIdeas: (req: express.Request, res: express.Response) => void;
    addIdea: (req: express.Request, res: express.Response) => void;
    getIdeaById: (req: express.Request, res: express.Response) => void;
}

export class IdeaController implements IIdeaController {
    public getIdeas = (req: express.Request, res: express.Response) => {
        res.status(200).send(`getting all ideas`);
    };

    public addIdea = (req: express.Request, res: express.Response) => {
        res.status(200).send(`Idea is added`);
    };

    public getIdeaById = (req: express.Request, res: express.Response) => {
        res.status(200).send(`getting idea by id${req.params.ideaId}`);
    };

}