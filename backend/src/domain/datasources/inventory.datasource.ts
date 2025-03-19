import { InventoryEntity } from "../entities/inventory.entity";

export abstract class InventoryDatasource {

    abstract create() : Promise<InventoryEntity>;

    abstract getAll() : Promise<InventoryEntity[]>;

    abstract findById(id: string) : Promise<InventoryEntity>;

    abstract updateById() : Promise<InventoryEntity>;

    abstract deleteById(id: string) : Promise<InventoryEntity>;

}