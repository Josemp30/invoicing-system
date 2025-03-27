import { StoreEntity } from "../entities/store.entity";

export abstract class StoreDatasource {

    abstract create() : Promise<StoreEntity>;

    abstract getAll() : Promise<StoreEntity[]>;

    abstract findById(id: string) : Promise<StoreEntity>;

    abstract updateById() : Promise<StoreEntity>;

    abstract deleteById(id: string) : Promise<StoreEntity>;

}