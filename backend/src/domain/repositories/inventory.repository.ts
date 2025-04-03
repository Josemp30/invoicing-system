import { AddProductDto, UpdatedInventoryDto } from "../dtos/inventories";
import { InventoryEntity } from "../entities";

export abstract class InventoryRepository {

    abstract create(dto: AddProductDto, storeId: string) : Promise<InventoryEntity>;

    abstract getAll() : Promise<InventoryEntity[]>;

    abstract findById(id: string) : Promise<InventoryEntity>;

    abstract updateById(dto: UpdatedInventoryDto) : Promise<InventoryEntity>;

    abstract deleteById(id: string) : Promise<InventoryEntity>;

}