import mongoose, { ConnectOptions } from "mongoose";

class MongoDBClient {
  private mongodbUri = process.env.MONGODB_URI;
  private mongooseOptions: ConnectOptions = {
    serverSelectionTimeoutMS: 5000,
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
  };

  constructor() {
    if (!this.mongodbUri) {
      throw new Error("Mongodb Uri is not found");
    }

    mongoose
      .connect(this.mongodbUri, this.mongooseOptions)
      .then(() => {
        console.log("MongoDB is successfully connected");
      })
      .catch((err) => {
        console.log("Unable to connect MongoDB", err);
      });
  }

  public getClient() {
    return mongoose;
  }
}

export default new MongoDBClient();
