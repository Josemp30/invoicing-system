import { UpdateShipmentDto } from "../../dtos/shipments";
import { ShipmentEntity } from "../../entities";
import { ShipmentRepository } from "../../repositories";

export interface UpdateShipmentUseCase {
    execute(dto: UpdateShipmentDto): Promise<ShipmentEntity>;
}

export class UpdateShipment implements UpdateShipmentUseCase {

    constructor(
        private repository: ShipmentRepository,
    ){}

    execute(dto: UpdateShipmentDto): Promise<ShipmentEntity> {
        return this.repository.updateById(dto);
    }

}