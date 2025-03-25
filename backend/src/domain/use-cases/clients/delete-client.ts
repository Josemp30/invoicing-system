import { ClientEntity } from "../../entities";
import { ClientRepository } from "../../repositories";

export interface DeleteClientUseCase {
    execute(id: string): Promise<ClientEntity>;
}

export class DeleteClient implements DeleteClientUseCase {

    constructor(
        private repository: ClientRepository,
    ){}

    execute(id: string): Promise<ClientEntity> {
        return this.repository.deleteById(id);
    }

}