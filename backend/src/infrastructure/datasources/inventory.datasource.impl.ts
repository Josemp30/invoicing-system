import { prisma } from "../../data/postgres";
import { InventoryDatasource } from "../../domain/datasources";
import { AddProductDto, UpdatedInventoryDto } from "../../domain/dtos/inventories";
import { InventoryEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class InventoryDatasourceImpl implements InventoryDatasource {

    async create(dto: AddProductDto, storeId: string): Promise<InventoryEntity> {
        const inventory = await prisma.inventory.findUnique({
            where: { storeId: storeId }
        });

        if(!inventory) throw CustomError.notFound(`Inventory with store id:${storeId} not found`);

        const newInventoryProduct = await prisma.inventoryProduct.create({
            data: {
                ...dto,
                inventoryId: inventory.id,
            }
        });

        return InventoryEntity.fromObject(newInventoryProduct);

    }

    async getAll(): Promise<InventoryEntity[]> {
        const inventoryProducts = await prisma.inventoryProduct.findMany()

        return inventoryProducts.map(inventory => InventoryEntity.fromObject(inventory));
    }

    async findById(id: string): Promise<InventoryEntity> {
        const inventoryProduct = await prisma.inventoryProduct.findFirst({
            where: {id: id}
        });

        if(!inventoryProduct) throw CustomError.notFound(`Inventory with id:${id} not found`);
        return InventoryEntity.fromObject(inventoryProduct);
    }

    async updateById(dto: UpdatedInventoryDto): Promise<InventoryEntity> {
        await this.findById(dto.id);

        const updatedInventoryProduct = await prisma.inventoryProduct.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return InventoryEntity.fromObject(updatedInventoryProduct);
    }

    async deleteById(id: string): Promise<InventoryEntity> {
        await this.findById(id);

        const deletedInventoryProduct = await prisma.inventoryProduct.delete({
            where: {id: id}
        });

        return InventoryEntity.fromObject(deletedInventoryProduct);
    }

}