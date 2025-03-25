import { TechnicianEntity } from "../../entities";
import { TechnicianRepository } from "../../repositories";

export interface GetTechnicianUseCase {
    execute(id: string): Promise<TechnicianEntity>;
}

export class GetTechnician implements GetTechnicianUseCase {

    constructor(
        private repository: TechnicianRepository,
    ){}

    execute(id: string): Promise<TechnicianEntity> {
        return this.repository.findById(id);
    }

}