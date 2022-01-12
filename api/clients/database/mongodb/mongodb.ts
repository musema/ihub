import mongoose from 'mongoose';

class MongoDBClient {
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    };

    constructor() {
        const connectionString = process.env.MONGODB_CONNECTION_STRING;
        if(!connectionString) {
            throw new Error("connection string was not found");
        }
        mongoose
        .connect(connectionString, this.mongooseOptions)
        .then(() => {
            console.log('MongoDB is successfully connected');
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
