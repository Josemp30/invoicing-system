import { CustomError } from "../errors/custom.error";

export class TechnicianEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phoneNumber: string,
    ){}

    static fromObject( object: { [key: string]: any }) : TechnicianEntity {
        const { 
            id,
            name,
            email,
            phoneNumber,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!name) throw CustomError.badRequest('Name of the technician or company is required');
        if(!phoneNumber) throw CustomError.badRequest('Phone number is required');
  

        return new TechnicianEntity(id, name, email, phoneNumber);

    }
}