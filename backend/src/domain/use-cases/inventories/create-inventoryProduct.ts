import { AddProductDto } from "../../dtos/inventories";
import { InventoryEntity } from "../../entities";
import { InventoryRepository } from "../../repositories";

export interface CreateInventoryProductUseCase {
    execute(dto: AddProductDto, storeId: string): Promise<InventoryEntity>;
}

export class CreateInventoryProduct implements CreateInventoryProductUseCase {

    constructor(
        private repository: InventoryRepository,
    ){}

    execute(dto: AddProductDto, storeId: string): Promise<InventoryEntity> {
        return this.repository.create(dto, storeId);
    }

}