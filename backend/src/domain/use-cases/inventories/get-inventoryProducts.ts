import { InventoryEntity } from "../../entities";
import { InventoryRepository } from "../../repositories";

export interface GetInventoryProductsUseCase {
    execute(): Promise<InventoryEntity[]>;
}

export class GetInventoryProducts implements GetInventoryProductsUseCase {

    constructor(
        private repository: InventoryRepository,
    ){}

    execute(): Promise<InventoryEntity[]> {
        return this.repository.getAll();
    }

}