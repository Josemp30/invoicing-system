import { ShipmentEntity } from "../../entities";
import { ShipmentRepository } from "../../repositories";

export interface GetShipmentUseCase {
    execute(id: string): Promise<ShipmentEntity>;
}

export class GetShipment implements GetShipmentUseCase {

    constructor(
        private repository: ShipmentRepository,
    ){}

    execute(id: string): Promise<ShipmentEntity> {
        return this.repository.findById(id);
    }

}