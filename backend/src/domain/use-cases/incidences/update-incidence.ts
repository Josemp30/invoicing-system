import { UpdateIncidenceDto } from "../../dtos/incidences";
import { IncidenceEntity } from "../../entities";
import { IncidenceRepository } from "../../repositories";

export interface UpdateIncidenceUseCase {
    execute(dto: UpdateIncidenceDto): Promise<IncidenceEntity>;
}

export class UpdateIncidence implements UpdateIncidenceUseCase {

    constructor(
        private repository: IncidenceRepository,
    ){}

    execute(dto: UpdateIncidenceDto): Promise<IncidenceEntity> {
        return this.repository.updateById(dto);
    }

}