import { TechnicianEntity } from "../entities/technician.entity";

export abstract class TechnicianDatasource {

    abstract create() : Promise<TechnicianEntity>;

    abstract getAll() : Promise<TechnicianEntity[]>;

    abstract findById(id: string) : Promise<TechnicianEntity>;

    abstract updateById() : Promise<TechnicianEntity>;

    abstract deleteById(id: string) : Promise<TechnicianEntity>;

}