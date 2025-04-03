import { prisma } from "../../data/postgres";
import { StoreDatasource } from "../../domain/datasources";
import { CreateStoreDto, UpdateStoreDto } from "../../domain/dtos/stores";
import { StoreEntity } from "../../domain/entities/store.entity";
import { CustomError } from "../../domain/errors/custom.error";

export class StoreDatasourceImpl implements StoreDatasource {

    async create(dto: CreateStoreDto): Promise<StoreEntity> {
        const newStore = await prisma.store.create({
            data: dto,
        });

        await prisma.inventory.create({
            data: {
                storeId: newStore.id,
            }
        })

        return StoreEntity.fromObject(newStore);
    }

    async getAll(): Promise<StoreEntity[]> {
        const stores = await prisma.store.findMany();

        return stores.map(store => StoreEntity.fromObject(store));
    }

    async findById(id: string): Promise<StoreEntity> {
        const store = await prisma.store.findFirst({
            where: {id: id}
        });

        if(!store) throw CustomError.notFound(`Store with id:${id} not found`);
        return StoreEntity.fromObject(store);
    }

    async updateById(dto: UpdateStoreDto): Promise<StoreEntity> {
        await this.findById(dto.id);

        const updatedStore = await prisma.store.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return StoreEntity.fromObject(updatedStore);
    }

    async deleteById(id: string): Promise<StoreEntity> {
        await this.findById(id);

        const deletedStore = await prisma.store.delete({
            where: {id: id},
        });

        return StoreEntity.fromObject(deletedStore);
    }

}