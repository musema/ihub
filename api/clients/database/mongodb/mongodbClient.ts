import { FilterQuery, Schema } from "mongoose";
import shortid from "shortid";

import { IRepository } from "../../../interfaces";
import mongooseClient from "./mongodb";

export abstract class MongodbClient<T> implements IRepository<T> {
  private Model;
  constructor(modelName: string, schema: Schema) {
    this.Model = mongooseClient.getClient().model<T>(modelName, schema);
  }
  get = (options: any): Promise<T[]> => {
    const page = options.page || 0;
    const limit = options.limit || 0;
    return this.Model.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  };

  getById = async (id: string): Promise<T | null> => {
    return this.Model.findOne({ _id: id } as FilterQuery<Schema>).exec();
  };

  create = async (entry: T): Promise<boolean> => {
    const id = shortid.generate();
    const newEntry = new this.Model({
      _id: id,
      ...entry,
    });
    await newEntry.save();
    return true;
  };

  update = async (id: string, updatedEntity: any) => {
    await this.Model.findByIdAndUpdate(id, updatedEntity);
    return true;
  };

  delete = async (id: string): Promise<boolean> => {
    this.Model.deleteOne({ _id: id } as FilterQuery<Schema>).exec();
    return true;
  };
}
