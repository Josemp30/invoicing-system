import { UpdateReservationDto } from "../../dtos/reservations";
import { ReservationEntity } from "../../entities";
import { ReservationRepository } from "../../repositories";

export interface UpdateReservationUseCase {
    execute(dto: UpdateReservationDto): Promise<ReservationEntity>;
}

export class UpdateReservation implements UpdateReservationUseCase {

    constructor(
        private repository: ReservationRepository,
    ){}

    execute(dto: UpdateReservationDto): Promise<ReservationEntity> {
        return this.repository.updateById(dto);
    }

}