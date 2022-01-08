import { Application } from "express";
import { IRouteHandler } from "./types";
import { IdeaController} from '../controllers/idea';

export class IdeasRoutes implements IRouteHandler {
    private ideaController = new IdeaController();

    addRoutes(app: Application): Application {

        app.route('/ideas')
        .get(this.ideaController.getIdeas)
        .post(this.ideaController.addIdea);

        app.route('/ideas/:ideaId')
            .put(this.ideaController.updateIdea)
            .delete(this.ideaController.deleteIdea)
            .get(this.ideaController.getIdeaById);

        app.route('/ideas/search')
            .get(this.ideaController.searchIdea);

        return app;
    }
    
}