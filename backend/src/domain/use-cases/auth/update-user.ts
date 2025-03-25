import { UpdateUserDto } from "../../dtos/auth";
import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface UpdateUserUseCase {
    excecute(dto: UpdateUserDto): Promise<UserEntity>;
}

export class UpdateUser implements UpdateUserUseCase {

    constructor(
        private readonly repository: UserRepository,
    ){}

    excecute(dto: UpdateUserDto): Promise<UserEntity> {
        return this.repository.updateById(dto);
    }

}
