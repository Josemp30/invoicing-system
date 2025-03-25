import { CreateReservationDto } from "../../dtos/reservations";
import { ReservationEntity } from "../../entities";
import { ReservationRepository } from "../../repositories";

export interface CreateReservationUseCase {
    execute(dto: CreateReservationDto): Promise<ReservationEntity>;
}

export class CreateReservation implements CreateReservationUseCase {

    constructor(
        private repository: ReservationRepository,
    ){}

    execute(dto: CreateReservationDto): Promise<ReservationEntity> {
        return this.repository.create(dto);
    }

}