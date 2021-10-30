import { Application } from "express";
import { IRouteHandler } from "./types";
import { IdeaController} from '../controllers/ideas';

export class IdeasRoutes implements IRouteHandler {
    private ideaController = new IdeaController();

    addRoutes(app: Application): Application {

        app.route('/ideas')
        .get(this.ideaController.getIdeas)
        .post(this.ideaController.addIdea);

        app.route('/ideas/:ideaId')
        .get(this.ideaController.getIdeaById);
        return app;
    }
    
}