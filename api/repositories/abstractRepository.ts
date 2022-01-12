import { IRepository } from '../interfaces';

export abstract class AbstractRepository<T> implements IRepository<T> {

  constructor(private repositoryClient: IRepository<T>) {}

  get(options: any): Promise<T[]> {
    return this.repositoryClient.get(options);
  }

  getById(id: string): Promise<T | null> {
    return this.repositoryClient.getById(id);
  }

  create(item: T): Promise<boolean> {
    return this.repositoryClient.create(item);
  }

  update(id: string, item: T): Promise<boolean> {
    return this.repositoryClient.update(id, item);
  }

  delete(id: string): Promise<boolean> {
    return this.repositoryClient.delete(id);
  }
}
