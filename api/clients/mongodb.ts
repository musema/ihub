// connect with mongodb
import mongoose from 'mongoose';

class MongoDBClient {
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        useFindAndModify: false,
    };

    constructor() {
        this.connectWithRetry();
    }

    private connectWithRetry = () => {
        mongoose
            .connect('mongodb://localhost:27017/ideadb', this.mongooseOptions)
            .then(() => {
                console.log('MongoDB is connected');
            })
            .catch((err) => {
                setTimeout(this.connectWithRetry, 2000);
                console.log('Unable to connect MongoDB');
            });
    };

    public getClient() {
        return mongoose;
    }
}

export default new MongoDBClient();
