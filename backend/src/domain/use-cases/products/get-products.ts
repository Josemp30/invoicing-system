import { ProductEntity } from "../../entities";
import { ProductRepository } from "../../repositories";

export interface GetProductsUseCase {
    execute(): Promise<ProductEntity[]>;
}

export class GetProducts implements GetProductsUseCase {

    constructor(
        private repository: ProductRepository,
    ){}

    execute(): Promise<ProductEntity[]> {
        return this.repository.getAll();
    }

}