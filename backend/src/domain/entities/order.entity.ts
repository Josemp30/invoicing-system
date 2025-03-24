import { CustomError } from "../errors/custom.error";

export class OrderEntity {

    constructor(
        public id: string,
        public clientName: string,
        public clientPhoneNumber: string,
        public product: string,
        public received: boolean,
    ){}

    static fromObject( object: { [key: string]: any }) : OrderEntity {
        const { 
            id,
            clientName,
            clientPhoneNumber,
            product,
            received = false,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!clientName) throw CustomError.badRequest('Name of the client is required');
        if(!clientPhoneNumber) throw CustomError.badRequest('Phone number is required');
        if(!product) throw CustomError.badRequest('Product is required');

        return new OrderEntity(id, clientName, clientPhoneNumber, product, received);

    }
}