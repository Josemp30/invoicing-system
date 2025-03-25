import { CreateTechnicianDto, UpdateTechnicianDto } from "../dtos/technicians";
import { TechnicianEntity } from "../entities";

export abstract class TechnicianRepository {

    abstract create(dto: CreateTechnicianDto) : Promise<TechnicianEntity>;

    abstract getAll() : Promise<TechnicianEntity[]>;

    abstract findById(id: string) : Promise<TechnicianEntity>;

    abstract updateById(dto: UpdateTechnicianDto) : Promise<TechnicianEntity>;

    abstract deleteById(id: string) : Promise<TechnicianEntity>;

}