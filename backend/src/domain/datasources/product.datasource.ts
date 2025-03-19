import { ProductEntity } from "../entities/product.entity";

export abstract class ProductDatasource {

    abstract create() : Promise<ProductEntity>;

    abstract getAll() : Promise<ProductEntity[]>;

    abstract findById(id: string) : Promise<ProductEntity>;

    abstract updateById() : Promise<ProductEntity>;

    abstract deleteById(id: string) : Promise<ProductEntity>;

}