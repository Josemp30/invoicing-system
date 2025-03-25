import { IncidenceEntity } from "../../entities";
import { IncidenceRepository } from "../../repositories";

export interface GetIncidenceUseCase {
    execute(id: string): Promise<IncidenceEntity>;
}

export class GetIncidence implements GetIncidenceUseCase {

    constructor(
        private repository: IncidenceRepository,
    ){}

    execute(id: string): Promise<IncidenceEntity> {
        return this.repository.findById(id);
    }

}