import { UpdateStoreDto } from "../../dtos/stores";
import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../../repositories";

export interface UpdateStoreUseCase {
    execute(dto: UpdateStoreDto): Promise<StoreEntity>;
}

export class UpdateStore implements UpdateStoreUseCase {

    constructor(
        private repository: StoreRepository,
    ){}

    execute(dto: UpdateStoreDto): Promise<StoreEntity> {
        return this.repository.updateById(dto);
    }

}