import { IDatabaseClient } from '../interfaces/databaseClient';
import { IRepository } from './interfaces/repository';


export abstract class AbstractRepository<T> implements IRepository<T> {

  constructor(private databaseClient: IDatabaseClient<T>) {
  }

  get(options: any): Promise<T[]> {
    return this.databaseClient.get(options);
  }

  getById(id: string): Promise<T | null> {
    return this.databaseClient.getById(id);
  }

  create(item: T): Promise<boolean> {
    return this.databaseClient.create(item);
  }

  update(id: string, item: T): Promise<boolean> {
    return this.databaseClient.update(id, item);
  }

  delete(id: string): Promise<boolean> {
    return this.databaseClient.delete(id);
  }

}
