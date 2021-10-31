import mongoose from 'mongoose';

class MongoDBClient {
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    };

    constructor() {
        mongoose
        .connect('mongodb://localhost:27017/ideadb', this.mongooseOptions)
        .then(() => {
            console.log('MongoDB is successfully connected to ideadb');
        })
        .catch((err) => {
            console.log('Unable to connect MongoDB');
        });
    }

    public getClient() {
        return mongoose;
    }
}

export default new MongoDBClient();
