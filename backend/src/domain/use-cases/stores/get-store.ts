import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../../repositories";

export interface GetStoreUseCase {
    execute(id: string): Promise<StoreEntity>;
}

export class GetStore implements GetStoreUseCase {

    constructor(
        private repository: StoreRepository,
    ){}

    execute(id: string): Promise<StoreEntity> {
        return this.repository.findById(id);
    }

}