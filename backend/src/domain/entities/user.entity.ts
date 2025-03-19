import { CustomError } from "../errors/custom.error";

export class UserEntity {

    constructor(
        public id: string,
        public role: string[],
        public email: string,
        public password: string,
        public name: string,
        public store: string,
        public emailValidated: boolean,
        public isActive: boolean,
    ){}

    static fromObject( object: { [key: string]: any }) : UserEntity {
        const { 
            id,
            role,
            email,
            password,
            name,
            store,
            emailValidated,
            isActive,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!role) throw CustomError.badRequest('Role is required');
        if(!email) throw CustomError.badRequest('Email is required');
        if(!password) throw CustomError.badRequest('Password is required');
        if(!name) throw CustomError.badRequest('Name is required');
        if(!store) throw CustomError.badRequest('Store is required');
        if(emailValidated === undefined) throw CustomError.badRequest('Missing email validation');
        if(isActive === undefined) throw CustomError.badRequest('Missing isActive');

        return new UserEntity(id, role, email, password, name, store, emailValidated, isActive);

    }

}