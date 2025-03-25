import { ShipmentEntity } from "../../entities";
import { ShipmentRepository } from "../../repositories";

export interface DeleteShipmentUseCase {
    execute(id: string): Promise<ShipmentEntity>;
}

export class DeleteShipment implements DeleteShipmentUseCase {

    constructor(
        private repository: ShipmentRepository,
    ){}

    execute(id: string): Promise<ShipmentEntity> {
        return this.repository.deleteById(id);
    }

}