import { CreateIncidenceDto, UpdateIncidenceDto } from "../dtos/incidences";
import { IncidenceEntity } from "../entities";

export abstract class IncidenceRepository {

    abstract create(dto: CreateIncidenceDto) : Promise<IncidenceEntity>;

    abstract getAll() : Promise<IncidenceEntity[]>;

    abstract findById(id: string) : Promise<IncidenceEntity>;

    abstract updateById(dto: UpdateIncidenceDto) : Promise<IncidenceEntity>;

    abstract deleteById(id: string) : Promise<IncidenceEntity>;

}