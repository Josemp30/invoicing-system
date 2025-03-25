import { CreateProductDto } from "../../dtos/products";
import { ProductEntity } from "../../entities";
import { ProductRepository } from "../../repositories";

export interface CreateProductUseCase {
    execute(dto: CreateProductDto): Promise<ProductEntity>;
}

export class CreateProduct implements CreateProductUseCase {

    constructor(
        private repository: ProductRepository,
    ){}

    execute(dto: CreateProductDto): Promise<ProductEntity> {
        return this.repository.create(dto);
    }

}