import { UpdateProductDto } from "../../dtos/products";
import { ProductEntity } from "../../entities";
import { ProductRepository } from "../../repositories";

export interface UpdateProductUseCase {
    execute(dto: UpdateProductDto): Promise<ProductEntity>;
}

export class UpdateProduct implements UpdateProductUseCase {

    constructor(
        private repository: ProductRepository,
    ){}

    execute(dto: UpdateProductDto): Promise<ProductEntity> {
        return this.repository.updateById(dto);
    }

}