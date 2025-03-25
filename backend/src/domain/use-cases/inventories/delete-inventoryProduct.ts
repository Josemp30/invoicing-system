import { InventoryEntity } from "../../entities";
import { InventoryRepository } from "../../repositories";

export interface DeleteInvetoryProductUseCase {
    execute(id: string): Promise<InventoryEntity>;
}

export class DeleteInventoryProduct implements DeleteInvetoryProductUseCase {

    constructor(
        private repository: InventoryRepository,
    ){}

    execute(id: string): Promise<InventoryEntity> {
        return this.repository.deleteById(id);
    }

}