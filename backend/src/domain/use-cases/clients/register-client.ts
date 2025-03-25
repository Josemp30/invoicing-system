import { CreateClientDto } from "../../dtos/clients";
import { ClientEntity } from "../../entities";
import { ClientRepository } from "../../repositories";

export interface RegisterClientUseCase {
    execute(dto: CreateClientDto): Promise<ClientEntity>;
}

export class RegisterClient implements RegisterClientUseCase{

    constructor(
        private repository: ClientRepository,
    ){}

    execute(dto: CreateClientDto): Promise<ClientEntity> {
        return this.repository.create(dto);
    }

}