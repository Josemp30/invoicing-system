import { UserEntity } from "../entities/user.entity";

export abstract class UserDatasource {

    abstract create() : Promise<UserEntity>;

    abstract getAll() : Promise<UserEntity[]>;

    abstract findById(id: string) : Promise<UserEntity>;

    abstract updateById() : Promise<UserEntity>;

    abstract deleteById(id: string) : Promise<UserEntity>;

}