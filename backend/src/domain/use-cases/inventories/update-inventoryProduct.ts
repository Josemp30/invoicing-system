import { UpdatedInventoryDto } from "../../dtos/inventories";
import { InventoryEntity } from "../../entities";
import { InventoryRepository } from "../../repositories";

export interface UpdateInventoryProductUseCase {
    execute(dto: UpdatedInventoryDto): Promise<InventoryEntity>;
}

export class UpdateInventoryProduct implements UpdateInventoryProductUseCase {

    constructor(
        private repository: InventoryRepository,
    ){}

    execute(dto: UpdatedInventoryDto): Promise<InventoryEntity> {
        return this.repository.updateById(dto);
    }

}