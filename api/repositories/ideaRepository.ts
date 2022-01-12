import { MongoDBClient } from '../clients/database/mongodb/mongodbClient';
import { IIdea } from '../models/idea';
import { AbstractRepository } from './abstractRepository';

export class IdeaRepository extends AbstractRepository<IIdea> {
    constructor(){
        super(new MongoDBClient()); // @TODO: this tight coupling needs to be fixed
    }
}

export default new IdeaRepository();
