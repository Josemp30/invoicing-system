import { CreateUserDto, UpdateUserDto } from "../dtos/auth";
import { UserEntity } from "../entities";

export abstract class UserRepository {

    abstract create(dto: CreateUserDto) : Promise<UserEntity>;

    abstract getAll() : Promise<UserEntity[]>;

    abstract findById(id: string) : Promise<UserEntity>;

    abstract updateById(dto: UpdateUserDto) : Promise<UserEntity>;

    abstract deleteById(id: string) : Promise<UserEntity>;

}