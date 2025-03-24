import { CreateReservationDto, UpdateReservationDto } from "../dtos/reservations";
import { ReservationEntity } from "../entities/reservation.entity";

export abstract class ReservationRepository {

    abstract create(dto: CreateReservationDto) : Promise<ReservationEntity>;

    abstract getAll() : Promise<ReservationEntity[]>;

    abstract findById(id: string) : Promise<ReservationEntity>;

    abstract updateById(dto: UpdateReservationDto) : Promise<ReservationEntity>;

    abstract deleteById(id: string) : Promise<ReservationEntity>;

}