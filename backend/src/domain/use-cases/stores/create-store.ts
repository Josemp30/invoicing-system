import { CreateStoreDto } from "../../dtos/stores";
import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../../repositories";

export interface CreateStoreUseCase {
    execute(dto: CreateStoreDto): Promise<StoreEntity>;
}

export class CreateStore implements CreateStoreUseCase {

    constructor(
        private repository: StoreRepository,
    ){}

    execute(dto: CreateStoreDto): Promise<StoreEntity> {
        return this.repository.create(dto);
    }

}