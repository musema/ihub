import { MongodbIdeaClient } from '../clients/database';
import { IIdea } from '../models/idea';
import { AbstractRepository } from './abstractRepository';

export class IdeaRepository extends AbstractRepository<IIdea> {
    constructor(){ 
        super(MongodbIdeaClient); // @TODO: this injection could further be improved with IoC
    }
}

export default new IdeaRepository();
