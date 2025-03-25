import { CreateIncidenceDto } from "../../dtos/incidences";
import { IncidenceEntity } from "../../entities";
import { IncidenceRepository } from "../../repositories";

export interface CreateIncidenceUseCase {
    execute(dto: CreateIncidenceDto): Promise<IncidenceEntity>;
}

export class CreateIncidence implements CreateIncidenceUseCase {

    constructor(
        private repository: IncidenceRepository,
    ){}

    execute(dto: CreateIncidenceDto): Promise<IncidenceEntity> {
        return this.repository.create(dto);
    }

}