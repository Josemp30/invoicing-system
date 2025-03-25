import { ReservationEntity } from "../../entities";
import { ReservationRepository } from "../../repositories";

export interface GetReservationUseCase {
    execute(id: string): Promise<ReservationEntity>;
}

export class GetReservation implements GetReservationUseCase {

    constructor(
        private repository: ReservationRepository,
    ){}

    execute(id: string): Promise<ReservationEntity> {
        return this.repository.findById(id);
    }

}