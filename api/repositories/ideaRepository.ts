import mongodbIdeaClient from '../clients/database/mongodb/mongodbIdeaClient';
import { IIdea } from '../models/idea';
import { AbstractRepository } from './abstractRepository';

export class IdeaRepository extends AbstractRepository<IIdea> {
    constructor(){ 
        super(mongodbIdeaClient); // @TODO: this injection could further be improved with IoC
    }
}

export default new IdeaRepository();
