import { TechnicianEntity } from "../../entities";
import { TechnicianRepository } from "../../repositories";

export interface GetTechniciansUseCase {
    execute(): Promise<TechnicianEntity[]>;
}

export class GetTechnicians implements GetTechniciansUseCase {

    constructor(
        private repository: TechnicianRepository,
    ){}

    execute(): Promise<TechnicianEntity[]> {
        return this.repository.getAll();
    }

}