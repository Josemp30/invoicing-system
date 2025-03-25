import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface GetUsersUseCase {
    execute(): Promise<UserEntity[]>;
}

export class GetUsers implements GetUsersUseCase {

    constructor(
        private repository: UserRepository,
    ){}

    execute(): Promise<UserEntity[]> {
        return this.repository.getAll();
    }

}