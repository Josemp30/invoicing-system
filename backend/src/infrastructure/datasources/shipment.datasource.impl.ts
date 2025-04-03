import { prisma } from "../../data/postgres";
import { ShipmentDatasource } from "../../domain/datasources";
import { CreateShipmentDto, UpdateShipmentDto } from "../../domain/dtos/shipments";
import { ShipmentEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class ShipmentDatasourceImpl implements ShipmentDatasource {

    async create(dto: CreateShipmentDto): Promise<ShipmentEntity> {
        const newShipment = await prisma.shipment.create({
            data: dto,
        });

        return ShipmentEntity.fromObject(newShipment);
    }

    async getAll(): Promise<ShipmentEntity[]> {
        const shipments = await prisma.shipment.findMany();

        return shipments.map(shipment => ShipmentEntity.fromObject(shipment));
    }

    async findById(id: string): Promise<ShipmentEntity> {
        const shipment = await prisma.shipment.findFirst({
            where: {id: id},
        });

        if(!shipment) throw CustomError.notFound(`Shipment with id:${id} not found`);
        return ShipmentEntity.fromObject(shipment);
    }

    async updateById(dto: UpdateShipmentDto): Promise<ShipmentEntity> {
        await this.findById(dto.id);

        const updatedShipment = await prisma.shipment.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return ShipmentEntity.fromObject(updatedShipment);
    }

    async deleteById(id: string): Promise<ShipmentEntity> {
        await this.findById(id);

        const deletedShipment = await prisma.shipment.delete({
            where: {id: id}
        });

        return ShipmentEntity.fromObject(deletedShipment);
    }

}