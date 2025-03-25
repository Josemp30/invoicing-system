import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface GetUserUseCase {
    execute(id: string): Promise<UserEntity>;
}

export class GetUser implements GetUserUseCase {

    constructor(
        private repository: UserRepository,
    ){}

    execute(id: string): Promise<UserEntity> {
        return this.repository.findById(id);
    }

}