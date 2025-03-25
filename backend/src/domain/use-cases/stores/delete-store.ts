import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../../repositories";

export interface DeleteStoreUseCase {
    execute(id: string): Promise<StoreEntity>;
}

export class DeleteStore implements DeleteStoreUseCase {

    constructor(
        private repository: StoreRepository,
    ){}

    execute(id: string): Promise<StoreEntity> {
        return this.repository.deleteById(id);
    }

}