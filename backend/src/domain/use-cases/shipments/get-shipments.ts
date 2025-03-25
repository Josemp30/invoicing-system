import { ShipmentEntity } from "../../entities";
import { ShipmentRepository } from "../../repositories";

export interface GetShipmentsUseCase {
    execute(): Promise<ShipmentEntity[]>;
}

export class GetShipments implements GetShipmentsUseCase {

    constructor(
        private repository: ShipmentRepository,
    ){}

    execute(): Promise<ShipmentEntity[]> {
        return this.repository.getAll();
    }

}