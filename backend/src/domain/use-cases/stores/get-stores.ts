import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../../repositories";

export interface GetStoresUseCase {
    execute(): Promise<StoreEntity[]>;
}

export class GetStores implements GetStoresUseCase {

    constructor(
        private repository: StoreRepository,
    ){}

    execute(): Promise<StoreEntity[]> {
        return this.repository.getAll();
    }

}