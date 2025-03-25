import { ProductEntity, TechnicianEntity } from "../../entities";
import { ProductRepository, TechnicianRepository } from "../../repositories";

export interface GetProductUseCase {
    execute(id: string): Promise<ProductEntity>;
}

export class GetProduct implements GetProductUseCase {

    constructor(
        private repository: ProductRepository,
    ){}

    execute(id: string): Promise<ProductEntity> {
        return this.repository.findById(id);
    }

}