import { prisma } from "../../data/postgres";
import { ClientDatasource } from "../../domain/datasources";
import { CreateClientDto, UpdateClientDto } from "../../domain/dtos/clients";
import { ClientEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class ClientDatasourceImpl implements ClientDatasource {

    async create(dto: CreateClientDto): Promise<ClientEntity> {
        const newClient = await prisma.client.create({
            data: dto,
        });

        return ClientEntity.fromObject(newClient);
    }

    async getAll(): Promise<ClientEntity[]> {
        const clients = await prisma.client.findMany();

        return clients.map(client => ClientEntity.fromObject(client));
    }

    async findById(id: string): Promise<ClientEntity> {
        const client = await prisma.client.findFirst({
            where: {id: id}
        });

        if(!client) throw CustomError.notFound(`Client with id:${id} not found`);
        return ClientEntity.fromObject(client);
    }

    async updateById(dto: UpdateClientDto): Promise<ClientEntity> {
        await this.findById(dto.id);

        const updatedClient = await prisma.client.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return ClientEntity.fromObject(updatedClient);
    }

    async deleteById(id: string): Promise<ClientEntity> {
        await this.findById(id);

        const deletedClient =  await prisma.client.delete({
            where: {id: id}
        });

        return ClientEntity.fromObject(deletedClient);
    }

}