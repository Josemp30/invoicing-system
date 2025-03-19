import { CustomError } from "../errors/custom.error";

export class InvoiceEntity {

    constructor(
        public id: string,
        public invoiceNumber: number,
        public date: string,
        public store: string,
        public clientName: string,
        public clientAddress: string,
        public clientPhoneNumber: string,
        public products: string[],
        public paymentMethod: string,
        public totalAmount: number,
    ){}

    static fromObject( object: { [key: string]: any }) : InvoiceEntity {
        const { 
            id,
            invoiceNumber,
            date,
            store,
            clientName,
            clientAddress,
            clientPhoneNumber,
            products,
            paymentMethod,
            totalAmount,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!invoiceNumber) throw CustomError.badRequest('Invoice Number is required');
        if(!date) throw CustomError.badRequest('Date is required');
        if(!store) throw CustomError.badRequest('Store is required');
        if(!clientName) throw CustomError.badRequest('Name of the client is required');
        if(!clientAddress) throw CustomError.badRequest('Address of the client is required');
        if(!clientPhoneNumber) throw CustomError.badRequest('Price is required');
        if(!products) throw CustomError.badRequest('Date is required');
        if(!paymentMethod) throw CustomError.badRequest('Origin is required');
        if(!totalAmount) throw CustomError.badRequest('Availability is required');

        return new InvoiceEntity(id, invoiceNumber, date, store, clientName, clientAddress, clientPhoneNumber, products, paymentMethod, totalAmount);

    }
}