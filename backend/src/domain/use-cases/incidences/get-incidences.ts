import { IncidenceEntity } from "../../entities";
import { IncidenceRepository } from "../../repositories";

export interface GetIncidencesUseCase {
    execute(): Promise<IncidenceEntity[]>;
}

export class GetIncidences implements GetIncidencesUseCase {

    constructor(
        private repository: IncidenceRepository,
    ){}

    execute(): Promise<IncidenceEntity[]> {
        return this.repository.getAll();
    }

}