import { CustomError } from "../errors/custom.error";

export class ClientEntity {

    constructor(
        public id: string,
        public name: string,
        public address: string,
        public phoneNumber: string,
        public registeredAt: Date,
    ){}

    static fromObject( object: { [key: string]: any }) : ClientEntity {
        const { 
            id,
            name,
            address,
            phoneNumber,
            registeredAt,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!name) throw CustomError.badRequest('Name of the client is required');
        if(!address) throw CustomError.badRequest('Address of the client is required');
        if(!phoneNumber) throw CustomError.badRequest('Phone number is required');
        if(!registeredAt) throw CustomError.badRequest('Date is required');

        return new ClientEntity(id, name, address, phoneNumber, registeredAt);

    }
}