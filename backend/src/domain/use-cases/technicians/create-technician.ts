import { CreateTechnicianDto } from "../../dtos/technicians";
import { TechnicianEntity } from "../../entities";
import { TechnicianRepository } from "../../repositories";

export interface CreateTechnicianUseCase {
    execute(dto: CreateTechnicianDto): Promise<TechnicianEntity>;
}

export class CreateTechnician implements CreateTechnicianUseCase {

    constructor(
        private repository: TechnicianRepository,
    ){}

    execute(dto: CreateTechnicianDto): Promise<TechnicianEntity> {
        return this.repository.create(dto);
    }

}