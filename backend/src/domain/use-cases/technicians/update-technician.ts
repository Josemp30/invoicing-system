import { UpdateTechnicianDto } from "../../dtos/technicians";
import { TechnicianEntity } from "../../entities";
import { TechnicianRepository } from "../../repositories";

export interface UpdateTechnicianUseCase {
    execute(dto: UpdateTechnicianDto): Promise<TechnicianEntity>;
}

export class UpdateTechnician implements UpdateTechnicianUseCase {

    constructor(
        private repository: TechnicianRepository,
    ){}

    execute(dto: UpdateTechnicianDto): Promise<TechnicianEntity> {
        return this.repository.updateById(dto);
    }

}