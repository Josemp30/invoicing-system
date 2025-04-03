import { AddProductDto, UpdatedInventoryDto } from "../dtos/inventories";
import { InventoryEntity } from "../entities/inventory.entity";

export abstract class InventoryDatasource {

    abstract create(dto: AddProductDto, storeId: string) : Promise<InventoryEntity>;

    abstract getAll() : Promise<InventoryEntity[]>;

    abstract findById(id: string) : Promise<InventoryEntity>;

    abstract updateById(dto: UpdatedInventoryDto) : Promise<InventoryEntity>;

    abstract deleteById(id: string) : Promise<InventoryEntity>;

}