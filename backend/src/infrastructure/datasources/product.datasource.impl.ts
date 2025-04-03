import { prisma } from "../../data/postgres";
import { ProductDatasource } from "../../domain/datasources";
import { CreateProductDto, UpdateProductDto } from "../../domain/dtos/products";
import { ProductEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class ProductDatasourceImpl implements ProductDatasource {

    async create(dto: CreateProductDto): Promise<ProductEntity> {
        const newProduct = await prisma.product.create({
            data: dto
        });

        return ProductEntity.fromObject(newProduct);
    }

    async getAll(): Promise<ProductEntity[]> {
        const products = await prisma.product.findMany();

        return products.map(product => ProductEntity.fromObject(product));
    }

    async findById(id: string): Promise<ProductEntity> {
        const product = await prisma.product.findFirst({
            where: {id: id}
        });

        if(!product) throw CustomError.notFound(`Product with id:${id} not found`);
        return ProductEntity.fromObject(product);
    }

    async updateById(dto: UpdateProductDto): Promise<ProductEntity> {
        await this.findById(dto.id);

        const updatedProduct = await prisma.product.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return ProductEntity.fromObject(updatedProduct);
    }

    async deleteById(id: string): Promise<ProductEntity> {
        await this.findById(id);

        const deletedProduct = await prisma.product.delete({
            where: {id: id},
        });

        return ProductEntity.fromObject(deletedProduct);
    }

}