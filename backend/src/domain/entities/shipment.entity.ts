import { CustomError } from "../errors/custom.error";

export class ShipmentEntity {

    constructor(
        public id: string,
        public invoiceNumber: number,
        public date: string,
        public from: string,
        public clientName: string,
        public clientAddress: string,
        public clientPhoneNumber: string,
        public products: string[],
        public deliveredAt: Date,
    ){}

    static fromObject( object: { [key: string]: any }) : ShipmentEntity {
        const { 
            id,
            invoiceNumber,
            date,
            from,
            clientName,
            clientAddress,
            clientPhoneNumber,
            products,
            deliveredAt,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!invoiceNumber) throw CustomError.badRequest('Invoice Number is required');
        if(!date) throw CustomError.badRequest('Date is required');
        if(!from) throw CustomError.badRequest('From is required');
        if(!clientName) throw CustomError.badRequest('Name of the client is required');
        if(!clientAddress) throw CustomError.badRequest('Address of the client is required');
        if(!clientPhoneNumber) throw CustomError.badRequest('Price is required');
        if(!products) throw CustomError.badRequest('Date is required');

        return new ShipmentEntity(id, invoiceNumber, date, from, clientName, clientAddress, clientPhoneNumber, products, deliveredAt);

    }
}