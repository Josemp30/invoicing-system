import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface DeleteUserUseCase {
    execute(id: string): Promise<UserEntity>;
}

export class DeleteUser implements DeleteUserUseCase {

    constructor(
        private repository: UserRepository,
    ){}

    execute(id: string): Promise<UserEntity> {
        return this.repository.deleteById(id);
    }

}