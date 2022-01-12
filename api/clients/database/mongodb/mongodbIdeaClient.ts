import { IIdea } from "../../../models/idea"; // @TODO: this should be an Entity instead of domain model
import { MongodbClient } from "./mongodbClient";
import { ideaSchema } from "./schemas/ideaSchema";

class MongodbIdeaClient extends MongodbClient<IIdea> {
    constructor() {
        super('Idea', ideaSchema);
    }
}
export default new MongodbIdeaClient();