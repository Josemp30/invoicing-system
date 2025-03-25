import { TechnicianEntity } from "../../entities";
import { TechnicianRepository } from "../../repositories";

export interface DeleteTechnicianUseCase {
    execute(id: string): Promise<TechnicianEntity>;
}

export class DeleteTechnician implements DeleteTechnicianUseCase {

    constructor(
        private repository: TechnicianRepository,
    ){}

    execute(id: string): Promise<TechnicianEntity> {
        return this.repository.deleteById(id);
    }

}