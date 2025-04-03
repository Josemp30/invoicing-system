import { prisma } from "../../data/postgres";
import { TechnicianDatasource } from "../../domain/datasources";
import { CreateTechnicianDto, UpdateTechnicianDto } from "../../domain/dtos/technicians";
import { TechnicianEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class TechnicianDatasourceImpl implements TechnicianDatasource {

    async create(dto: CreateTechnicianDto): Promise<TechnicianEntity> {
        const newTechnician = await prisma.technician.create({
            data: dto,
        });

        return TechnicianEntity.fromObject(newTechnician);
    }

    async getAll(): Promise<TechnicianEntity[]> {
        const technicians = await prisma.technician.findMany();

        return technicians.map(technician => TechnicianEntity.fromObject(technician));
    }

    async findById(id: string): Promise<TechnicianEntity> {
        const technician = await prisma.technician.findFirst({
            where: {id: id}
        });

        if(!technician) throw CustomError.notFound(`Technician with id:${id} not found`);
        return TechnicianEntity.fromObject(technician);
    }

    async updateById(dto: UpdateTechnicianDto): Promise<TechnicianEntity> {
        await this.findById(dto.id);

        const updatedTechnician = await prisma.technician.update({
            where: {id: dto.id},
            data: dto.values
        });

        return TechnicianEntity.fromObject(updatedTechnician);
    }

    async deleteById(id: string): Promise<TechnicianEntity> {
        await this.findById(id);

        const deletedTechnician = await prisma.technician.delete({
            where: {id: id}
        });

        return TechnicianEntity.fromObject(deletedTechnician);
    }

}