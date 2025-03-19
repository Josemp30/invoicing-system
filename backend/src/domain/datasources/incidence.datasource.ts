import { IncidenceEntity } from "../entities/incidence.entity";

export abstract class IncidenceDatasource {

    abstract create() : Promise<IncidenceEntity>;

    abstract getAll() : Promise<IncidenceEntity[]>;

    abstract findById(id: string) : Promise<IncidenceEntity>;

    abstract updateById() : Promise<IncidenceEntity>;

    abstract deleteById(id: string) : Promise<IncidenceEntity>;

}