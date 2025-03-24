import { CreateClientDto, UpdateClientDto } from "../dtos/clients";
import { ClientEntity } from "../entities/client.entity";

export abstract class ClientRepository {

    abstract create(dto: CreateClientDto) : Promise<ClientEntity>;

    abstract getAll() : Promise<ClientEntity[]>;

    abstract findById(id: string) : Promise<ClientEntity>;

    abstract updateById(dto: UpdateClientDto) : Promise<ClientEntity>;

    abstract deleteById(id: string) : Promise<ClientEntity>;

}