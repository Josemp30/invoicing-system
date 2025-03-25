import { CustomError } from "../errors/custom.error";

export class StoreEntity {

    constructor(
        public id: string,
        public name: string,
        public address: string,
        public phoneNumber: string,
    ){}

    static fromObject( object: {[key: string]: any}) : StoreEntity {

        const { id, name, address, phoneNumber } = object;

        if(!name) throw CustomError.badRequest('Name of the store is required');
        if(!address) throw CustomError.badRequest('Address of the store is required');
        if(!phoneNumber) throw CustomError.badRequest('Phone number of the store is required');

        return new StoreEntity(id, name, address, phoneNumber);

    }

}