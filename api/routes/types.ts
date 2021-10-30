import { Application} from 'express';

export interface IRouteHandler {
    addRoutes(app: Application): Application;
}
