import { MongoDBClient } from '../clients/database/mongodb/mongodbClient';
import { IIdea } from '../models/idea';
import { AbstractRepository } from './abstractRepository';

export class IdeaRepository extends AbstractRepository<IIdea> {
    constructor(){
        super(new MongoDBClient())
    }
}

export default new IdeaRepository();
