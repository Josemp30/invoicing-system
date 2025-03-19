import { ClientEntity } from "../entities/client.entity";

export abstract class ClientRepository {

    abstract create() : Promise<ClientEntity>;

    abstract getAll() : Promise<ClientEntity[]>;

    abstract findById(id: string) : Promise<ClientEntity>;

    abstract updateById() : Promise<ClientEntity>;

    abstract deleteById(id: string) : Promise<ClientEntity>;

}