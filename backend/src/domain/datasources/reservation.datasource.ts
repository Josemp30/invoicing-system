import { ReservationEntity } from "../entities/reservation.entity";

export abstract class ReservationDatasource {

    abstract create() : Promise<ReservationEntity>;

    abstract getAll() : Promise<ReservationEntity[]>;

    abstract findById(id: string) : Promise<ReservationEntity>;

    abstract updateById() : Promise<ReservationEntity>;

    abstract deleteById(id: string) : Promise<ReservationEntity>;

}