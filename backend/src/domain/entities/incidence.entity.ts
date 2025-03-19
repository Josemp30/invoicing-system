import { CustomError } from "../errors/custom.error";

export class IncidenceEntity {

    constructor(
        public id: string,
        public invoiceNumber: number,
        public product: string,
        public technian: string,
        public createdAt: Date,
        public solvedAt: Date,
    ){}

    static fromObject( object: { [key: string]: any }) : IncidenceEntity {
        const { 
            id,
            invoiceNumber,
            product,
            technian,
            createdAt,
            solvedAt,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!invoiceNumber) throw CustomError.badRequest('Invoice Number is required');
        if(!product) throw CustomError.badRequest('Product is required');
        if(!technian) throw CustomError.badRequest('Technian is required');
        if(!createdAt) throw CustomError.badRequest('Date of the creation is required');

        return new IncidenceEntity(id, invoiceNumber, product, technian, createdAt, solvedAt);

    }
}