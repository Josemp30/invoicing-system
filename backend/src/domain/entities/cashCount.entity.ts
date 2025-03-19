import { CustomError } from "../errors/custom.error";

export class CashCountEntity {

    constructor(
        public id: string,
        public date: string,
        public invoices: number[],
        public totalAmount: number,
    ){}

    static fromObject( object: { [key: string]: any }) : CashCountEntity {
        const { 
            id,
            date,
            invoices,
            totalAmount,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!date) throw CustomError.badRequest('Date is required');
        if(!totalAmount) throw CustomError.badRequest('Total amount is required');

        return new CashCountEntity(id, date, invoices, totalAmount);

    }
}