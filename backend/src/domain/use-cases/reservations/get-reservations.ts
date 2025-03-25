import { ReservationEntity } from "../../entities";
import { ReservationRepository } from "../../repositories";

export interface GetReservationsUseCase {
    execute(): Promise<ReservationEntity[]>;
}

export class GetReservations implements GetReservationsUseCase {

    constructor(
        private repository: ReservationRepository,
    ){}

    execute(): Promise<ReservationEntity[]> {
        return this.repository.getAll();
    }

}