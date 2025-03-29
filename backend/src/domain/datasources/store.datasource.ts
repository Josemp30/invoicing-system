import { CreateStoreDto, UpdateStoreDto } from "../dtos/stores";
import { StoreEntity } from "../entities/store.entity";

export abstract class StoreDatasource {

    abstract create(dto: CreateStoreDto) : Promise<StoreEntity>;

    abstract getAll() : Promise<StoreEntity[]>;

    abstract findById(id: string) : Promise<StoreEntity>;

    abstract updateById(dto: UpdateStoreDto) : Promise<StoreEntity>;

    abstract deleteById(id: string) : Promise<StoreEntity>;

}