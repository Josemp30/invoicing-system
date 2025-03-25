import { CreateShipmentDto } from "../../dtos/shipments";
import { ShipmentEntity } from "../../entities";
import { ShipmentRepository } from "../../repositories";

export interface CreateShipmentUseCase {
    execute(dto: CreateShipmentDto): Promise<ShipmentEntity>;
}

export class CreateShipment implements CreateShipmentUseCase {

    constructor(
        private repository: ShipmentRepository,
    ){}

    execute(dto: CreateShipmentDto): Promise<ShipmentEntity> {
        return this.repository.create(dto);
    }

}