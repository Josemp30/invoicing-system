import { CreateIncidenceDto, UpdateIncidenceDto } from "../dtos/incidences";
import { IncidenceEntity } from "../entities/incidence.entity";

export abstract class IncidenceDatasource {

    abstract create(dto: CreateIncidenceDto) : Promise<IncidenceEntity>;

    abstract getAll() : Promise<IncidenceEntity[]>;

    abstract findById(id: string) : Promise<IncidenceEntity>;

    abstract updateById(dto: UpdateIncidenceDto) : Promise<IncidenceEntity>;

    abstract deleteById(id: string) : Promise<IncidenceEntity>;

}