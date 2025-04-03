import { Roles } from "@prisma/client";
import { prisma } from "../../data/postgres";
import { UserDatasource } from "../../domain/datasources";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos/auth";
import { UserEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

const roleEnum = {
    admin: Roles.ADMIN,
    vendor: Roles.VENDOR,
    fullAdmin: Roles.FULLADMIN,
}

export class UserDatasourceImpl implements UserDatasource {

    async create(dto: CreateUserDto): Promise<UserEntity> {
        
        const newUser = await prisma.user.create({
            data: {
                ...dto,
                role: roleEnum[dto.role],
            }
        });

        return UserEntity.fromObject(newUser);
    }

    async getAll(): Promise<UserEntity[]> {
        const users = await prisma.user.findMany();

        return users.map(user => UserEntity.fromObject(user));
    }

    async findById(id: string): Promise<UserEntity> {
        const user = await prisma.user.findFirst({
            where: {id: id},
        });

        if(!user) throw CustomError.notFound(`User with id:${id} not found`);
        return UserEntity.fromObject(user);
    }

    async updateById(dto: UpdateUserDto): Promise<UserEntity> {
        await this.findById(dto.id);

        const updatedUser = await prisma.user.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return UserEntity.fromObject(updatedUser);
    }

    async deleteById(id: string): Promise<UserEntity> {
        await this.deleteById(id);

        const deletedUser = await prisma.user.delete({
            where: {id: id}
        });

        return UserEntity.fromObject(deletedUser);
    }

}