import { ClientEntity } from "../../entities";
import { ClientRepository } from "../../repositories";

export interface GetClientUseCase {
    execute(id: string): Promise<ClientEntity>;
}

export class GetClient implements GetClientUseCase {

    constructor(
        private repository: ClientRepository,
    ){}

    execute(id: string): Promise<ClientEntity> {
        return this.repository.findById(id);
    }

}