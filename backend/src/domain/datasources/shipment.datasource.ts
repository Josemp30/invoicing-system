import { ShipmentEntity } from "../entities/shipment.entity";

export abstract class ShipmentDatasource {

    abstract create() : Promise<ShipmentEntity>;

    abstract getAll() : Promise<ShipmentEntity[]>;

    abstract findById(id: string) : Promise<ShipmentEntity>;

    abstract updateById() : Promise<ShipmentEntity>;

    abstract deleteById(id: string) : Promise<ShipmentEntity>;

}