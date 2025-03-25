import { InventoryEntity } from "../../entities";
import { InventoryRepository } from "../../repositories";

export interface GetInventoryProductUseCase {
    execute(id: string): Promise<InventoryEntity>;
}

export class GetInventoryProduct implements GetInventoryProductUseCase {

    constructor(
        private repository: InventoryRepository,
    ){}

    execute(id: string): Promise<InventoryEntity> {
        return this.repository.findById(id);
    }

}