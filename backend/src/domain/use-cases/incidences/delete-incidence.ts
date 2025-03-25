import { IncidenceEntity } from "../../entities";
import { IncidenceRepository } from "../../repositories";

export interface DeleteIncidenceUseCase {
    execute(id: string): Promise<IncidenceEntity>;
}

export class DeleteIncidence implements DeleteIncidenceUseCase {

    constructor(
        private repository: IncidenceRepository,
    ){}

    execute(id: string): Promise<IncidenceEntity> {
        return this.repository.deleteById(id);
    }

}