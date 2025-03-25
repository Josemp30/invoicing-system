import { CreateUserDto } from "../../dtos/auth";
import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface RegisterUserUseCase {
    execute(dto: CreateUserDto): Promise<UserEntity>;
}

export class RegisterUser implements RegisterUserUseCase {
    
    constructor(
        private readonly repository: UserRepository,
    ){}
    
    execute(dto: CreateUserDto): Promise<UserEntity> {
        return this.repository.create(dto);
    }

}