import { CreateShipmentDto, UpdateShipmentDto } from "../dtos/shipments";
import { ShipmentEntity } from "../entities";

export abstract class ShipmentRepository {

    abstract create(dto: CreateShipmentDto) : Promise<ShipmentEntity>;

    abstract getAll() : Promise<ShipmentEntity[]>;

    abstract findById(id: string) : Promise<ShipmentEntity>;

    abstract updateById(dto: UpdateShipmentDto) : Promise<ShipmentEntity>;

    abstract deleteById(id: string) : Promise<ShipmentEntity>;

}