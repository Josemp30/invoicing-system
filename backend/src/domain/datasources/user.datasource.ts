import { CreateUserDto, UpdateUserDto } from "../dtos/auth";
import { UserEntity } from "../entities/user.entity";

export abstract class UserDatasource {

    abstract create(dto: CreateUserDto) : Promise<UserEntity>;

    abstract getAll() : Promise<UserEntity[]>;

    abstract findById(id: string) : Promise<UserEntity>;

    abstract updateById(dto: UpdateUserDto) : Promise<UserEntity>;

    abstract deleteById(id: string) : Promise<UserEntity>;

}