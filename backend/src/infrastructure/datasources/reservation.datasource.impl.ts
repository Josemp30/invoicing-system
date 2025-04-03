import { prisma } from "../../data/postgres";
import { ReservationDatasource } from "../../domain/datasources";
import { CreateReservationDto, UpdateReservationDto } from "../../domain/dtos/reservations";
import { ReservationEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class ReservationDatasourceImpl implements ReservationDatasource {

    async create(dto: CreateReservationDto): Promise<ReservationEntity> {
        const newReservation = await prisma.reservation.create({
            data: dto,
        });

        return ReservationEntity.fromObject(newReservation);
    }

    async getAll(): Promise<ReservationEntity[]> {
        const reservations = await prisma.reservation.findMany();

        return reservations.map(reservation => ReservationEntity.fromObject(reservation));
    }

    async findById(id: string): Promise<ReservationEntity> {
        const reservation = await prisma.reservation.findFirst({
            where: {id: id}
        });

        if(!reservation) throw CustomError.notFound(`Reservation with id:${id} not found`);
        return ReservationEntity.fromObject(reservation);
    }

    async updateById(dto: UpdateReservationDto): Promise<ReservationEntity> {
        await this.findById(dto.id);

        const updatedReservation = await prisma.reservation.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return ReservationEntity.fromObject(updatedReservation);
    }

    async deleteById(id: string): Promise<ReservationEntity> {
        await this.findById(id);

        const deletedReservation = await prisma.reservation.delete({
            where: {id: id},
        });

        return ReservationEntity.fromObject(deletedReservation);
    }

}