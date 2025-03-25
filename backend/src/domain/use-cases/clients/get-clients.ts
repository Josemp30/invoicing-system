import { ClientEntity } from "../../entities";
import { ClientRepository } from "../../repositories";

export interface GetClientsUseCase {
    execute(): Promise<ClientEntity[]>;
}

export class GetClients implements GetClientsUseCase {

    constructor(
        private repository: ClientRepository,
    ){}

    execute(): Promise<ClientEntity[]> {
        return this.repository.getAll();
    }

}