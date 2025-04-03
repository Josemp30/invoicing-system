import { prisma } from "../../data/postgres";
import { IncidenceDatasource } from "../../domain/datasources";
import { CreateIncidenceDto, UpdateIncidenceDto } from "../../domain/dtos/incidences";
import { IncidenceEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class IncidenceDatasourceImpl implements IncidenceDatasource {

    async create(dto: CreateIncidenceDto): Promise<IncidenceEntity> {
        const newIncidence = await prisma.incidence.create({
            data: dto,
        });

        return IncidenceEntity.fromObject(newIncidence);
    }

    async getAll(): Promise<IncidenceEntity[]> {
        const incidences = await prisma.incidence.findMany();

        return incidences.map(incidence => IncidenceEntity.fromObject(incidence));
    }

    async findById(id: string): Promise<IncidenceEntity> {
        const incidence = await prisma.incidence.findFirst({
            where: {id: id}
        });

        if(!incidence) throw CustomError.notFound(`Incidence with id:${id} not found`);
        return IncidenceEntity.fromObject(incidence);
    }

    async updateById(dto: UpdateIncidenceDto): Promise<IncidenceEntity> {
        await this.findById(dto.id);

        const updatedIncidence = await prisma.incidence.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return IncidenceEntity.fromObject(updatedIncidence);
    }

    async deleteById(id: string): Promise<IncidenceEntity> {
        await this.findById(id);

        const deletedIncidence = await prisma.incidence.delete({
            where: {id: id}
        });

        return IncidenceEntity.fromObject(deletedIncidence);
    }

}