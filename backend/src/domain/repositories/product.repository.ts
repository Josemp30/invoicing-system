import { CreateProductDto, UpdateProductDto } from "../dtos/products";
import { ProductEntity } from "../entities";

export abstract class ProductRepository {

    abstract create(dto: CreateProductDto) : Promise<ProductEntity>;

    abstract getAll() : Promise<ProductEntity[]>;

    abstract findById(id: string) : Promise<ProductEntity>;

    abstract updateById(dto: UpdateProductDto) : Promise<ProductEntity>;

    abstract deleteById(id: string) : Promise<ProductEntity>;

}