import { CustomError } from "../errors/custom.error";

export class ReservationEntity {

    constructor(
        public id: string,
        public clientName: string,
        public clientAddress: string,
        public clientPhoneNumber: string,
        public product: string,
        public paidAmount: number ,
        public pendingAmount: number,
    ){}

    static fromObject( object: { [key: string]: any }) : ReservationEntity {
        const { 
            id,
            clientName,
            clientAddress,
            clientPhoneNumber,
            product,
            paidAmount,
            pendingAmount,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!clientName) throw CustomError.badRequest('Name of the client is required');
        if(!clientAddress) throw CustomError.badRequest('Address of the client is required');
        if(!clientPhoneNumber) throw CustomError.badRequest('Phone number is required');
        if(!product) throw CustomError.badRequest('Product is required');
        if(!paidAmount) throw CustomError.badRequest('Paid amount is required');
        if(!pendingAmount) throw CustomError.badRequest('Pending amount is required');
        

        return new ReservationEntity(id, clientName, clientAddress, clientPhoneNumber, product, paidAmount, pendingAmount);

    }
}