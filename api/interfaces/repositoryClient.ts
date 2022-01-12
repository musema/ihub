export interface IRepositoryClient<T> {
    get: (options: any) => Promise<T[]>;
    getById: (id: string) => Promise<T | null>;
    create: (item: T) => Promise<boolean>;
    update: (id: string, updatedEntity: T) => Promise<boolean>;
    delete: (id: string) => Promise<boolean>;
}