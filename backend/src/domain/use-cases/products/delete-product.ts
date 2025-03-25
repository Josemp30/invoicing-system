import { ProductEntity } from "../../entities";
import { ProductRepository } from "../../repositories";

export interface DeleteProductUseCase {
    execute(id: string): Promise<ProductEntity>;
}

export class DeleteProduct implements DeleteProductUseCase {

    constructor(
        private repository: ProductRepository,
    ){}

    execute(id: string): Promise<ProductEntity> {
        return this.repository.deleteById(id);
    }

}