import { UpdateClientDto } from "../../dtos/clients";
import { ClientEntity } from "../../entities";
import { ClientRepository } from "../../repositories";

export interface UpdateClientUseCase {
    execute(dto: UpdateClientDto): Promise<ClientEntity>;
}

export class UpdateClient implements UpdateClientUseCase {

    constructor(
        private repository: ClientRepository,
    ){}

    execute(dto: UpdateClientDto): Promise<ClientEntity> {
        return this.repository.updateById(dto);
    }

}