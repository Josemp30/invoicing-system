import { ReservationEntity } from "../../entities";
import { ReservationRepository } from "../../repositories";

export interface DeleteReservationUseCase {
    execute(id: string): Promise<ReservationEntity>;
}

export class DeleteReservation implements DeleteReservationUseCase {

    constructor(
        private repository: ReservationRepository,
    ){}

    execute(id: string): Promise<ReservationEntity> {
        return this.repository.deleteById(id);
    }

}